import moo from 'moo';
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar

// This may not be exactly perfect, but it's sufficient for now.
const validIdentifier = '[_$A-Za-z][_$A-Za-z0-9]*';
// Strings being able to split over lines is going to take some tricks
const STRINGESCAPE = /(?:\\u[A-Fa-f0-9]{4})|(?:\\.)/;

export default moo.states({
    main: {
        LEXOUR_ANNOTATION_singleline: {
            match: /\/\/@.*?$/,
            value: s => s.replace(/^\/\/@[ \t]*/, ''),
        },
        LEXOUR_ANNOTATION_inline: {
            match: /\/\*@.*?@\*\//,
            value: s => s.replace(/^\/\*@[ \t]*|[ \t]*@\*\/$/g, ''),
        },
        COMMENT_block: { match: /\/\*/, push: 'commentBlock' },
        COMMENT_singleline: /\/\/.*$/,
        // Hashbang is apparently a new addition and also I think not finalized
        COMMENT_hashBang: /^#!.*$/,

        STRING_start: { match: ["'", '"'], push: 'string' },
        TEMPLATELITERAL_start: { match: '`', push: 'templateLiteral' },

        PUNCTUATION_leftBrace: { match: '{', push: 'main' },
        PUNCTUATION_rightBrace: { match: '}', pop: 1 },
        PUNCTUATION_misc: /[\(\)\,\[\]\;\.]/,

        KEYWORD: [
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
        ],
        KEYWORD_arrowFunc: '=>',
        OPERATOR: [
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
        LITERAL_value: ['null', 'undefined', 'true', 'false'],
        LITERAL_number: /[\d]+(?:\.[\d]+)?/,

        CONSTANT_this: 'this',
        // This is an incredibly aggressive regex and probably best replaced
        FUNCTION_declarationArrow: new RegExp(validIdentifier + '(?=[^]*?=>)'),
        VARIABLE_declaration: new RegExp(
            '(?<=(?:let|var)[\\[{\\t, _$A-Za-z]+?)' + validIdentifier,
        ),
        FUNCTION_declaration: new RegExp(
            '(?<=function\\*?[\\t ]+?)' + validIdentifier,
        ),
        CONSTANT_declaration: new RegExp(
            '(?<=const[[{\\t, _$A-Za-z]+?)' + validIdentifier,
        ),
        CONSTANT_classDeclaration: new RegExp(
            '(?<=class[\\t ]+?)' + validIdentifier,
        ),

        CONSTANT_superInvocation: /super(?=[ \t]*\(.*?)/,
        CONSTANT_classRef: new RegExp(
            '(?<=(?:extends|new)[\\t ]+?)' + validIdentifier,
        ),
        METHOD_invocation: new RegExp(
            '(?<=\\.)' + validIdentifier + '(?=[ \\t]*\\(.*?)',
        ),
        FUNCTION_invocation: new RegExp(validIdentifier + '(?=[ \\t]*\\(.*?)'),
        CONSTANT_unknownRef: /[A-Z][_$A-Za-z0-9]*/,
        VARIABLE_unknownRef: new RegExp(validIdentifier),

        EMPTYLINE: { match: /^[ \t]*\n$/, lineBreaks: true },
        NEWLINE: { match: /\n/, lineBreaks: true },
        INDENTATION: /^[ \t]+/,
        WHITESPACE: /[ \t]+/,
    },
    commentBlock: {
        COMMENT_block_end: { match: /\*\//, pop: 1 },
        COMMENT_content: /.+?(?:(?=\*\/)|(?=\n))/,
        NEWLINE: { match: /\n/, lineBreaks: true },
        INDENTATION: /^[ \t]+/,
    },
    // This works for now, but does create some unnecessary token groups
    // (but non-noticeable/problematic groups)
    string: {
        STRINGESCAPE,
        STRING_content: /(?:[^\\]+?(?="|\\))|(?:[^\\]+?(?='|\\))/,
        STRING_end: { match: /(?:(?<=".+?)")|(?:(?<='.+?)')/, pop: 1 },
    },
    templateLiteral: {
        STRINGESCAPE,
        TEMP_LITERAL_end: { match: '`', pop: 1 },
        TEMP_LITERAL_interpolation_start: { match: '${', push: 'main' },
        NEWLINE: { match: /\n/, lineBreaks: true },
        WHITESPACE: /[ \t]+/,
    },
});
