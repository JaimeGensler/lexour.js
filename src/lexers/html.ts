import moo from 'moo';

export default moo.states({
    main: {
        'tag.open': { match: /\<\/?/, push: 'tag' },
        // Temporary
        'text.escape': { match: /&[A-Za-z0-9\#]+;/ },
        'text': { match: /[ A-Za-z1-9\t!?\.,]+/ },

        'invalid': moo.error,
    },
    tag: {
        'tag.close': { match: '>', pop: 1 },

        'tag.name': { match: /(?<=\<\/?)[A-za-z0-9-_]+/ },
        'tag.attribute.id': { match: ' id' },
        'tag.attribute': { match: / [A-za-z0-9-_]+/ },

        'punctuation': { match: /=/ },
        'string': [{ match: /(?:'[^']*')/ }, { match: /"[^"]*"/ }],

        'invalid': moo.error,
    },
});
