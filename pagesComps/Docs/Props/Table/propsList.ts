export default [
    {
        name: 'code',
        type: 'string',
        defaultValue: null,
        description: 'The input code to be tokenized.',
        required: true,
    },
    {
        name: 'lang',
        type: 'BuiltInLang | Moo.Lexer',
        defaultValue: null,
        description:
            'The language to tokenize the string as. Can be provided as a string representing a built-in language (see below), or a Moo Lexer for toy languages.',
        required: true,
    },
    {
        name: 'theme',
        type: 'BuiltInTheme | ThemeObject',
        defaultValue: '"oneDarkPro"',
        description: 'The theme used to colorize the block and tokens.',
        required: false,
    },
    {
        name: 'showLineNumbers',
        type: 'boolean',
        defaultValue: 'false',
        description:
            'Controls whether or not line numbers are rendered in the block.',
        required: false,
    },
    {
        name: 'firstLine',
        type: 'number',
        defaultValue: '1',
        description:
            'The starting line number. Note: has no effect if showLineNumbers is false.',
        required: false,
    },
];
