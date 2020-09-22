import jsKeywords from './keywords.json';

const addState = (...x: any[]): any => {};
const pushState = (...x: any[]): any => {};
const popState = (...x: any[]): any => {};
const comment = (...x: any[]): any => {};
const rule = (x?: any, y?: ((...z: any[]) => any) | string): any => {};
const keywords = (...args: any[]): any => {};
const remainder = (...args: any[]): any => {};

const memorize = (...x: any[]): any => {};
const recall = (...x: any[]): any => {};

enum JsStates {
    MAIN = 'MAIN',
    STRING = 'STRING',
    TEMPLATE_LITERAL = 'TEMPLATE_LITERAL',
}

addState(
    JsStates.MAIN,
    comment('#!'),
    comment('//'),
    comment('/*', '*/', true),
    rule(/"|'/, match => {
        memorize('STRING_ENTRY', match === '"' ? 'DOUBLE' : 'SINGLE');
        pushState(JsStates.STRING);
        return 'string';
    }),
    rule('`', match => {
        pushState(JsStates.TEMPLATE_LITERAL);
        return 'string.template';
    }),
    rule(/[\{\}\(\)\,\[\]\;\.]/, 'punctuation'),
    keywords(jsKeywords, ''),
).addState(
    JsStates.STRING,
    rule(/(?:\\.)|(?:\\u[0-9]{4})/, 'string.escaped'),
    rule(/"|'/, match => {
        if (recall('STRING_ENTRY') === match) {
            popState();
        }
        return 'string';
    }),
    remainder('string'),
);

// export default addState({
//         'keyword.arrow': '=>',

//         'operator': [
//             // Arithmetic
//             '+',
//             '*',
//             '/',
//             '-',
//             '%',
//             '++',
//             '--',
//             '**',

//             // Assignment
//             '=',
//             '+=',
//             '-=',
//             '*=',
//             '/=',
//             '**=',
//             '<<=',
//             '>>=',
//             '>>>=',
//             '&=',
//             '^=',
//             '|=',
//             '&&=',
//             '||=',
//             '??=',

//             // Ternary (this may need some work)
//             '?',
//             ':',

//             // Logical
//             '==',
//             '!=',
//             '===',
//             '!==',
//             '>=',
//             '>',
//             '<',
//             '<=',

//             // Comparison
//             '&&',
//             '||',
//             '!',
//         ],
//         'literal.boolean': ['true', 'false'],
//         'literal.value': ['null', 'undefined'],
//         // There are more ways of declaring numbers that I can account for reasonably easily
//         'literal.number': /[\d]+(?:\.[\d]+)?/,

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

//         'empty': { match: /^[ \t]*\n$/, lineBreaks: true },
//         'newline': { match: /\n/, lineBreaks: true },
//         'indentation': /^[ \t]+/,
//         'whitespace': /[ \t]+/,

//         'invalid': moo.error,
//     },
//     commentBlock: {
//         comment: [
//             { match: /.+?(?:(?=\*\/)|(?=\n))/ },
//             { match: /\*\//, pop: 1 },
//         ],
//         newline: { match: /\n/, lineBreaks: true },
//         indentation: /^[ \t]+/,
//     },
//     string: {
//         'string.escape': escapedSequence,
//         'string': [
//             // This works for now, but does create some unnecessary token groups
//             // (but non-noticeable/problematic groups)
//             { match: /(?:[^\\]+?(?="|\\))|(?:[^\\]+?(?='|\\))/ },
//             { match: /(?:(?<=".+?)")|(?:(?<='.+?)')/, pop: 1 },
//         ],
//     },
//     templateLiteral: {
//         'string.escape': escapedSequence,
//         'string.template': [
//             // This needs content!
//             { match: '`', pop: 1 },
//         ],
//         'string.template.interpolation': { match: '${', push: 'main' },
//         'newline': { match: /\n/, lineBreaks: true },
//         'whitespace': /[ \t]+/,
//     },
// });
