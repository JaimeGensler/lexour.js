import getRegExpString from '../../utils/getRegExpString';
import { RuleType } from '../../../types';
import type { Rule, TokenResolver, Matcher } from '../../../types';

import comment from './comment';
export { comment };
import remainder from './remainder';
export { remainder };

export function rule(
    rawSearch: Matcher | string[],
    tokenResolver: TokenResolver,
): Rule {
    return {
        ruleType: RuleType.COMMON,
        tokenResolver,
        search: getRegExpString(rawSearch),
    };
}
