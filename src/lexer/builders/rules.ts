import getRegExpString from '../utils/getRegExpString';
import type { TokenResolver } from '../../types';

export enum RuleType {
    COMMON = 'COMMON',
    REMAINDER = 'REMAINDER',
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

export function comment(start: Search, stop?: Search, permitMultiLine = false) {
    const middle = permitMultiLine ? '[\\s\\S]+?' : '.*?';
    const end = stop !== undefined ? getRegExpString(stop) : '$';
    const search = getRegExpString(start) + middle + end;

    return { ruleType: RuleType.COMMON, tokenResolver: 'comment', search };
}

// const commentResolver = (match: string) => {
//     // Annotations may not cross lines
//     // CHECK TO SEE IF IT'S //@ or /*@ @*/
//     if (!isAnnotation(match)) {
//         return 'comment';
//     }
//     // DO ANNOTATION STUFF HERE
// };
// const isAnnotation = () => {
//     /\r\n|\r|\n/.test(match) || !/ /.test(match);
//     return true;
// };

// export function keywords(keywords, tokenResolver) {}
