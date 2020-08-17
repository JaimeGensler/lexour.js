import { ThemeObject } from '../types';

export default {
    DEFAULT: {
        color: '#abb2bf',
        background: '#282c34',
    },
    LINE_NUMBERS: {
        color: '#5c6370',
    },
    string: {
        style: {
            color: '#98c379',
        },
        escape: {
            style: {
                color: '#56b6c2',
            },
        },
    },
    comment: {
        color: '#7f848e',
        fontStyle: 'italic',
    },
    operator: {
        color: '#56b6c2',
    },
    literal: {
        color: '#d19a66',
    },
    constant: {
        color: '#e5c07b',
    },
    variable: {
        color: '#e06c75',
    },
    keyword: {
        color: '#c678dd',
    },
    function: {
        color: '#61afef',
        fontWeight: 'bold',
    },
    method: {
        color: '#56b6c2',
        fontWeight: 'bold',
    },
} as ThemeObject;
