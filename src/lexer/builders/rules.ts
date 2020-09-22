import getRegExpString from '../utils/getRegExpString';
import type { TokenResolver } from '../../types';

export enum RuleType {
    COMMON = 'COMMON',
    REMAINDER = 'REMAINDER',
    COMMENT = 'COMMENT',
}
// This can probably be improved
export interface Rule {
    readonly ruleType: RuleType;
    readonly tokenResolver: TokenResolver;
    readonly search?: string;
}
type Search = string | RegExp;

export function rule(rawSearch: Search, tokenResolver: TokenResolver): Rule {
    return {
        ruleType: RuleType.COMMON,
        tokenResolver,
        search: getRegExpString(rawSearch),
    };
}

export function remainder(tokenResolver: TokenResolver) {
    return { ruleType: RuleType.REMAINDER, tokenResolver } as Rule;
}

export function comment(
    start: Search,
    end: Search = '$',
    permitMultiLine = false,
) {
    const middle = permitMultiLine ? '[\\s\\S]+?' : '.*?';
    const search = getRegExpString(start) + middle + getRegExpString(end);

    return { ruleType: RuleType.COMMON, tokenResolver: 'comment', search };
}

const commentResolver = (match: string) => {
    if (/\r\n|\r|\n/.test(match)) {
        // Annotations may not cross lines
        return 'comment';
    }
    if (/ /.test(match)) {
    }
};

// export function keywords(keywords, tokenResolver) {}
