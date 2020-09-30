import { buildLexer, rule, remainder, comment } from '../lexer';
import splitLastChar from './utils/splitLastChar';

enum JsonState {
    MAIN = 'MAIN',
    STRING = 'STRING',
}

// JSON doesn't have comments but they're necessary for annotations.
// Sticking with JS-style comments.
export default buildLexer(JsonState.MAIN)
    .addState(
        JsonState.MAIN,
        comment('//'),
        comment('/*', '*/', true),
        rule(
            /"[A-Za-z0-9]+":/,
            splitLastChar('variable.property', 'punctuation'),
        ),
        rule(/[\[\]\{\},]/, 'punctuation'),
        rule('"', (_, { pushState }) => {
            pushState(JsonState.STRING);
            return 'string';
        }),
        rule(/true|false/, 'literal.boolean'),
        rule('null', 'literal.value'),
        // https://stackoverflow.com/questions/13340717/json-numbers-regular-expression
        rule(/-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/, 'literal.number'),
    )
    .addState(
        JsonState.STRING,
        rule('"', (_, { popState }) => {
            popState();
            return 'string';
        }),
        rule(/\\u[A-Fa-f0-9]{4}|\\./, 'string.escape'),
        remainder('string'),
    )
    .build();
