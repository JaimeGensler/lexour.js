import { RuleType } from '../../../types';
import type { Rule, TokenResolver } from '../../../types';

export default function remainder(tokenResolver: TokenResolver): Rule {
    return { ruleType: RuleType.REMAINDER, tokenResolver } as Rule;
}
