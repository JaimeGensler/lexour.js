import moo from 'moo';

export default moo.states({
    main: {
        'lexour.annotation': {
            match: /<!--@.*?@-->/,
            value: s => s.replace(/(?:^<!--@[ \t])|(?:[ \t]@-->$)/, ''),
        },

        'comment': [{ match: '<!--', push: 'commentBlock' }],
        'tag.open': { match: /<(?:\/|\!)?/, push: 'tag' },
        // Temporary
        'text.escape': { match: /&[A-Za-z0-9\#]+;/ },
        'text': { match: /[^\n<]+/ },

        'empty': { match: /^[ \t]*\n$/, lineBreaks: true },
        'newline': { match: /\n/, lineBreaks: true },
        'indentation': /^[ \t]+/,
        'whitespace': /[ \t]+/,
        'invalid': moo.error,
    },
    tag: {
        'tag.close': { match: /[ \t]*\/?>/, pop: 1 },

        'tag.name': { match: /(?<=<(?:\/|\!)?)[A-za-z0-9-_]+/ },
        'tag.attribute.id': { match: /[ \t]+id/ },
        'tag.attribute': { match: /[ \t]+[A-za-z0-9-_]+/ },

        'punctuation': { match: /[ \t]*=[ \t]*/ },
        'string': [{ match: /(?:'[^']*')/ }, { match: /"[^"]*"/ }],

        'invalid': moo.error,
    },
    commentBlock: {
        comment: [{ match: '-->', pop: 1 }, { match: /.+?/ }],

        empty: { match: /^[ \t]*\n$/, lineBreaks: true },
        newline: { match: /\n/, lineBreaks: true },
        indentation: /^[ \t]+/,

        invalid: moo.error,
    },
});
