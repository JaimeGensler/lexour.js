import buildTheme from './buildTheme';

// https://binaryify.github.io/OneDark-Pro/#/
export default buildTheme({ color: '#abb2bf', background: '#282c34' })
    .lineNumbers({ color: '#5c6370' })
    .invalid({
        color: '#ffffff',
        textDecorationStyle: 'wavy',
        textDecorationLine: 'underline',
        textDecorationColor: '#f44747',
    })
    .color('#c678dd', ['keyword', 'string.interpolation'])
    .color('#e06c75', ['variable', 'tag.name', 'text.escape'])
    .color('#d19a66', ['literal', 'tag.attribute'])
    .color('#e5c07b', ['constant'])
    .color('#7f848e', ['comment'])
    .color('#61afef', ['function', 'tag.attribute.id'])
    .color('#98c379', ['string'])
    .color('#56b6c2', ['string.escape', 'operator', 'function.method'])
    .fontStyle('italic', ['comment'])
    .fontWeight('bold', ['function'])
    .build();
