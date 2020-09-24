import { buildLexer, rule, remainder, comment } from '../lexer';

enum HtmlState {
    MAIN = 'MAIN',
    TAG = 'TAG',
}

export default buildLexer(HtmlState.MAIN)
    .addState(
        HtmlState.MAIN,
        comment('<!--', '-->', true),
        rule(/<(?:\/|!)?/, (_, { pushState }) => {
            pushState(HtmlState.TAG);
            return 'punctuation';
        }),
        rule(/&[A-Za-z0-9#]+;/, 'text.escape'),
        // Remainder is a slightly lazy solution but should be fine.
        // Possible rule alternative left in incase.
        // rule(/[A-Za-z \t0-9!@#$%^&;,*()\[\]{}\.\\?"']+/, 'text'),
        remainder('text'),
    )
    .addState(
        HtmlState.TAG,
        rule(/\/?>/, (_, { popState, forget }) => {
            forget('hasTagName');
            popState();
            return 'punctuation';
        }),
        rule('=', 'punctuation'),
        rule(/[A-Za-z0-9-]+/, (match, { memorize, recall }) => {
            if (!recall('hasTagName')) {
                memorize('hasTagName', true);
                return 'tag.name';
            }
            return `tag.attribute${/^id$/.test(match) ? '.id' : ''}`;
        }),
        rule(/(?:"[^"\r\n]*")|(?:'[^\r\n']*')/, 'string'),
    )
    .build();
