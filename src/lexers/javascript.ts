import moo from 'moo';
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar

// This is now final.
const validIdentifier = '[_$A-Za-z][_$A-Za-z0-9]*';
const escapedSequence = [
    { match: /(?:\\u[A-Fa-f0-9]{4})/ },
    { match: /(?:\\.)/ },
];
const withDestructuring = (s: string) => `(?<=${s}[\\[{\\t, _$A-Za-z]+?)`;

export default moo.states({
    main: {
        'lexour.annotation': [
            {
                match: /\/\/@.*?$/,
                value: s => s.replace(/^\/\/@[ \t]*/, ''),
            },
            {
                match: /\/\*@.*?@\*\//,
                value: s => s.replace(/^\/\*@[ \t]*|[ \t]*@\*\/$/g, ''),
            },
        ],

        'comment': [
            { match: /\/\*/, push: 'commentBlock' },
            { match: /\/\/.*$/ },
        ],
        'comment.alternate': /^#!.*$/, //Hashbang is a newer addition, also maybe not finalized

        'string': { match: ["'", '"'], push: 'string' },
        'string.template': { match: '`', push: 'templateLiteral' },

        'punctuation': [
            { match: '{', push: 'main' }, //left brace
            { match: '}', pop: 1 }, // right brace
            { match: /[\(\)\,\[\]\;\.]/ }, // misc
        ],

        // These need to be modified per https://github.com/no-context/moo#keywords
        'keyword': [
            'async',
            'await',
            'break',
            'case',
            'catch',
            'class',
            'const',
            'continue',
            'debugger',
            'default',
            'delete',
            'do',
            'else',
            'enum',
            'export',
            'extends',
            'finally',
            'for',
            'function',
            'if',
            'import',
            'implements',
            'in',
            'instanceof',
            'interface',
            'let',
            'new',
            'package',
            'private',
            'protected',
            'public',
            'return',
            'static',
            'switch',
            'this',
            'throw',
            'try',
            'typeof',
            'var',
            'void',
            'while',
            'with',
            'yield',
            '=>',
        ],
        'keyword.arrow': '=>',

        'operator': [
            // Arithmetic
            '+',
            '*',
            '/',
            '-',
            '%',
            '++',
            '--',
            '**',

            // Assignment
            '=',
            '+=',
            '-=',
            '*=',
            '/=',
            '**=',
            '<<=',
            '>>=',
            '>>>=',
            '&=',
            '^=',
            '|=',
            '&&=',
            '||=',
            '??=',

            // Ternary (this may need some work)
            '?',
            ':',

            // Logical
            '==',
            '!=',
            '===',
            '!==',
            '>=',
            '>',
            '<',
            '<=',

            // Comparison
            '&&',
            '||',
            '!',
        ],
        'literal.boolean': ['true', 'false'],
        'literal.value': ['null', 'undefined'],
        // There are more ways of declaring numbers that I can account for reasonably easily
        'literal.number': /[\d]+(?:\.[\d]+)?/,

        'constant.this': 'this',
        'constant.class': [
            {
                match: new RegExp(
                    '(?<=(?:class|extends|new)[\\t ]+?)' + validIdentifier,
                ),
            },
            {
                match: 'super',
            },
        ],

        // This is an incredibly aggressive regex and best replaced
        'function__declaration.arrow': new RegExp(
            validIdentifier + '(?=[^]*?=>)',
        ),
        'function__declaration': new RegExp(
            '(?<=function\\*?[\\t ]+?)' + validIdentifier,
        ),
        'variable__declaration': new RegExp(
            withDestructuring('(?:let|var)') + validIdentifier,
        ),
        'constant__declaration': new RegExp(
            withDestructuring('const') + validIdentifier,
        ),

        'function.method__invocation': new RegExp(
            '(?<=\\.)' + validIdentifier + '(?=[ \\t]*\\(.*?)',
        ),
        'function__invocation': new RegExp(
            validIdentifier + '(?=[ \\t]*\\(.*?)',
        ),
        'constant__ref': /[A-Z][_$A-Za-z0-9]*/,
        'variable__ref': new RegExp(validIdentifier),

        'empty': { match: /^[ \t]*\n$/, lineBreaks: true },
        'newline': { match: /\n/, lineBreaks: true },
        'indentation': /^[ \t]+/,
        'whitespace': /[ \t]+/,
    },
    commentBlock: {
        comment: [
            { match: /.+?(?:(?=\*\/)|(?=\n))/ },
            { match: /\*\//, pop: 1 },
        ],
        newline: { match: /\n/, lineBreaks: true },
        indentation: /^[ \t]+/,
    },
    string: {
        'string.escape': escapedSequence,
        'string': [
            // This works for now, but does create some unnecessary token groups
            // (but non-noticeable/problematic groups)
            { match: /(?:[^\\]+?(?="|\\))|(?:[^\\]+?(?='|\\))/ },
            { match: /(?:(?<=".+?)")|(?:(?<='.+?)')/, pop: 1 },
        ],
    },
    templateLiteral: {
        'string.escape': escapedSequence,
        'string.template': [
            // This needs content!
            { match: '`', pop: 1 },
        ],
        'string.template.interpolation': { match: '${', push: 'main' },
        'newline': { match: /\n/, lineBreaks: true },
        'whitespace': /[ \t]+/,
    },
});
