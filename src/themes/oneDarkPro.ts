import { ThemeObject } from '../types';

export default {
    default: {
        color: '#abb2bf',
        background: '#282c34',
    },
    lineNumbers: {
        color: '#5c6370',
    },
    tokens: {
        STRING: {
            color: '#98c379',
        },
        COMMENT: {
            color: '#7f848e',
            fontStyle: 'italic',
        },
        OPERATOR: {
            color: '#56b6c2',
        },
        LITERAL: {
            color: '#d19a66',
        },
        CONSTANT: {
            color: '#e5c07b',
        },
        VARIABLE: {
            color: '#e06c75',
        },
        KEYWORD: {
            color: '#c678dd',
        },
        STRINGESCAPE: {
            color: '#56b6c2',
        },
        FUNCTION: {
            color: '#61afef',
            fontWeight: 'bold',
        },
        METHOD: {
            color: '#56b6c2',
            fontWeight: 'bold',
        },
    },
} as ThemeObject;
