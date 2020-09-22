import buildLexer, { rule, remainder } from '../lexer';

enum HtmlState {
    MAIN = 'MAIN',
    TAG = 'TAG',
}

// const { getState, resetState, pushState, popState } = getStateManager(
//     HtmlState.MAIN,
// );

export default buildLexer(HtmlState.MAIN)
    .addState(
        HtmlState.MAIN,
        rule(/<(?:\/|!)?/, (_, { pushState }) => {
            pushState(HtmlState.TAG);
            return 'punctuation';
        }),
        rule(/&[A-Za-z0-9#]+;/, 'text.escape'),
        // rule(/[A-Za-z \t0-9!@#$%^&;,*()\[\]{}\.\\?"']+/, 'text'),
        remainder('text'),
    )
    .addState(
        HtmlState.TAG,
        rule(/\\?>/, (_, { popState }) => {
            popState();
            return 'punctuation';
        }),
        rule('=', 'punctuation'),
        rule(/[A-Za-z1-6]+/, 'tag.name'),
        rule(
            /[\s]+[A-Za-z1-6]+/,
            value => `tag.attribute${/[\s]+id/.test(value) ? '.id' : ''}`,
        ),
        rule(/(?:"[^"]+")|(?:'[^']+')/, 'string'),
    )
    .build();
