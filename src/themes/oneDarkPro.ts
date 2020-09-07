import type { Theme } from '../types';

export default {
    DEFAULT: {
        color: '#abb2bf',
        background: '#282c34',
    },
    LINE_NUMBER: {
        style: {
            color: '#5c6370',
        },
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
        style: {
            color: '#7f848e',
            fontStyle: 'italic',
        },
    },
    operator: {
        style: {
            color: '#56b6c2',
        },
    },
    literal: {
        style: {
            color: '#d19a66',
        },
    },
    constant: {
        style: {
            color: '#e5c07b',
        },
    },
    variable: {
        style: {
            color: '#e06c75',
        },
    },
    keyword: {
        style: {
            color: '#c678dd',
        },
    },
    function: {
        style: {
            color: '#61afef',
            fontWeight: 'bold',
        },
        method: {
            style: {
                color: '#56b6c2',
                fontWeight: 'bold',
            },
        },
    },
    invalid: {
        style: {
            color: '#ffffff',
            textDecorationStyle: 'wavy',
            textDecorationLine: 'underline',
            textDecorationColor: '#db0000',
        },
    },
    tag: {
        name: {
            style: {
                color: '#e06c75',
            },
        },
        attribute: {
            style: {
                color: '#d19a66',
            },
            id: {
                style: {
                    color: '#61afef',
                },
            },
        },
    },
    text: {
        escape: {
            style: {
                color: '#e06c75',
            },
        },
        style: {
            color: '#abb2bf',
        },
    },
} as Theme;
