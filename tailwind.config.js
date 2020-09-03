module.exports = {
    purge: [],
    theme: {
        extend: {
            fontSize: {
                '8xl': '6rem',
                '9xl': '7rem',
                '10xl': '8rem',
            },
            transitionProperty: {
                github: 'transform, opacity',
            },
            listStyleType: {
                square: 'square',
            },
        },
    },
    variants: {
        translate: [
            'responsive',
            'hover',
            'focus',
            'group-hover',
            'group-focus',
        ],
        opacity: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
        textColor: [
            'responsive',
            'hover',
            'focus',
            'visited',
            'group-hover',
            'group-focus',
        ],
        backgroundColor: ['responsive', 'hover', 'focus', 'even'],
    },
    plugins: [],
};
