import getRegExpString from '../../utils/getRegExpString';
import { RuleType } from '../../../types';
import type { Rule, TokenResolver } from '../../../types';

import comment from './comment';
export { comment };
import remainder from './remainder';
export { remainder };
import keywords from './keywords';
export { keywords };

export function rule(
    searchExpression: string | string[] | RegExp,
    tokenResolver: TokenResolver,
): Rule {
    return {
        ruleType: RuleType.COMMON,
        tokenResolver,
        search: getRegExpString(searchExpression),
    };
}
