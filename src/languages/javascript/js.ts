import { buildLexer, comment, rule, remainder, keywords } from '../../lexer';
import jsKeywords from './keywords.json';
import jsOperators from './operators';

enum JsState {
    MAIN = 'MAIN',
    STRING = 'STRING',
    TEMPLATE_LITERAL = 'TEMPLATE_LITERAL',
}

const identifier = '[_$A-Za-z][_$A-Za-z0-9]*';
export default buildLexer(JsState.MAIN)
    .addState(
        JsState.MAIN,
        // === COMMENTS ===
        comment('#!'),
        comment('//'),
        comment('/*', '*/', true),

        // === VALUES ===
        rule(/true|false/, 'literal.boolean'),
        rule(/undefined|null/, 'literal.value'),
        rule(
            // Match [Decimal (leading 0 permitted), binary, octal, hex], potentially with exponentiation
            /(?:(?:\d+|(?:\d*\.\d+))|(?:0[bB][01]+)|(?:0[oO][0-7]+)|(?:0[xX][\dA-Fa-f]+))(?:[eE]\d+)?/,
            match => {
                // May remove type spec
                const type = /b/i.test(match)
                    ? 'binary'
                    : /x/i.test(match)
                    ? 'hexadecimal'
                    : /o|(?:^0[0-7]+$)/i.test(match)
                    ? 'octal'
                    : 'decimal';
                return `literal.number.${type}`;
            },
        ),

        // === KEYWORDS, OPERATORS ===
        keywords(jsKeywords, 'keyword', new RegExp(identifier)),
        rule('=>', 'function.arrow'),
        rule(jsOperators, 'operator'),

        // === IDENTIFIERS ===
        rule(new RegExp(identifier), 'variable'),

        // === STRINGS ===
        rule(/"|'|`/, (match, { recall, memorize, pushState }) => {
            const stringManager = recall('STRING_MANAGER');
            if (stringManager === undefined) {
                memorize('STRING_MANAGER', [match]);
            } else {
                stringManager.push(match);
            }

            pushState(JsState.STRING);
            return 'string';
        }),
        rule('`', (_, { pushState }) => {
            pushState(JsState.TEMPLATE_LITERAL);
            return 'string';
        }),
        // === PUNCTUATION ===
        rule(/[\{\}\(\)\,\[\]\;\.]/, (match, { pushState, popState }) => {
            if (match === '{') {
                pushState(JsState.MAIN);
            } else if (match === '}') {
                const nextState = popState();
                if (nextState === JsState.STRING) {
                    return 'string.interpolation';
                }
            }
            return 'punctuation';
        }),
    )
    .addState(
        JsState.STRING,
        rule(/(?:\\.)|(?:\\u[0-9]{4})/, 'string.escape'),
        rule('${', (_, { recall, pushState }) => {
            const stringManager: string[] = recall('STRING_MANAGER');
            if (stringManager[stringManager.length - 1] === '`') {
                pushState(JsState.MAIN);
                return 'string.interpolation';
            }
            return 'string';
        }),
        rule(/"|'|`/, (match, { recall, popState }) => {
            const stringManager = recall('STRING_MANAGER');
            if (stringManager[stringManager.length - 1] === match) {
                stringManager.pop();
                popState();
            }
            return 'string';
        }),
        remainder('string'),
    )
    .build();

// export default addState({
//         'constant.this': 'this',
//         'constant.class': [
//             {
//                 match: new RegExp(
//                     '(?<=(?:class|extends|new)[\\t ]+?)' + validIdentifier,
//                 ),
//             },
//             {
//                 match: 'super',
//             },
//         ],

//         // This is an incredibly aggressive regex and best replaced
//         'function__declaration.arrow': new RegExp(
//             validIdentifier + '(?=[^]*?=>)',
//         ),
//         'function__declaration': new RegExp(
//             '(?<=function\\*?[\\t ]+?)' + validIdentifier,
//         ),
//         'variable__declaration': new RegExp(
//             withDestructuring('(?:let|var)') + validIdentifier,
//         ),
//         'constant__declaration': new RegExp(
//             withDestructuring('const') + validIdentifier,
//         ),

//         'function.method__invocation': new RegExp(
//             '(?<=\\.)' + validIdentifier + '(?=[ \\t]*\\(.*?)',
//         ),
//         'function__invocation': new RegExp(
//             validIdentifier + '(?=[ \\t]*\\(.*?)',
//         ),
//         'constant__ref': /[A-Z][_$A-Za-z0-9]*/,
//         'variable__ref': new RegExp(validIdentifier),
//         'invalid': moo.error,
//     },
// });
