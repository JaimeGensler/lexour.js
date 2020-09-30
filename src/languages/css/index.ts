import tt from './tokenTypes';
import { buildLexer, rule, comment, remainder } from '../../lexer';
import splitLastChar from '../utils/splitLastChar';

enum CssState {
    MAIN = 'MAIN',
    PROPERTIES = 'PROPERTIES',
    STRING = 'STRING',
}

const ident = '[A-Za-z0-9\\_\\-]+';
export default buildLexer(CssState.MAIN)
    .addState(
        CssState.MAIN,
        comment('/*', '*/', true),

        rule('*', tt.SELECTOR_UNIVERAL),
        rule(new RegExp(ident), tt.SELECTOR_TAG),
        rule(new RegExp(`\\.${ident}`), tt.SELECTOR_CLASS),
        rule(new RegExp(`#${ident}`), tt.SELECTOR_ID),
        rule(new RegExp(`:${ident}`), tt.SELECTOR_PSEUDOCLASS),
        rule(new RegExp(`@${ident}`), tt.DIRECTIVE),

        rule(/[\{\},]/, (match, { pushState }) => {
            if (match === '{') {
                pushState(CssState.PROPERTIES);
            }
            return tt.PUNCTUATION;
        }),
        rule(/\(.*?\)/, 'keyword'),
        rule(/[>+~]/, tt.COMBINATOR),
    )
    .addState(
        CssState.PROPERTIES,
        rule(
            new RegExp(`${ident}\\(`),
            splitLastChar(tt.FUNCTION, tt.PUNCTUATION),
        ),
        rule(
            new RegExp(`${ident}:`),
            splitLastChar(tt.PROPERTY, tt.PUNCTUATION),
        ),
        rule(/-?(?:(?:\d*\.\d+)|\d+)(?:[eE][+-]?\d+)?[A-Za-z%]*/, match => {
            const groupSearch = /(-?(?:(?:\d*\.\d+)|\d+)(?:[eE][+-]?\d+)?)([A-Za-z%]*)/;
            const [, number, unit] = groupSearch.exec(match)!;
            const numToken = { type: tt.NUMBER, value: number };
            if (unit.length === 0) {
                return numToken;
            }
            const unitToken = { type: tt.UNIT, value: unit };
            return [numToken, unitToken];
        }),
        rule(/[A-Za-z\_\-]+/, tt.VALUE),
        rule(/#[A-Fa-f0-9]{3,6}/, tt.VALUE_COLOR),
        rule(/"|'/, (match, { pushState, memorize }) => {
            memorize('STRING_ENTRY', match);
            pushState(CssState.STRING);
            return 'string';
        }),
        rule(/[,;\)\{\}]/, (match, { pushState, popState }) => {
            if (match === '{') {
                pushState(CssState.PROPERTIES);
            } else if (match === '}') {
                popState();
            }
            return tt.PUNCTUATION;
        }),
    )
    .addState(
        CssState.STRING,
        rule(/(?:\\.)|(?:\\u[0-9]{4})/, tt.STRING_ESCAPE),
        rule(/"|'/, (match, { popState, recall, forget }) => {
            if (match === recall('STRING_ENTRY')) {
                forget('STRING_ENTRY');
                popState();
            }
            return tt.STRING;
        }),
        remainder(tt.STRING),
    )
    .build();
