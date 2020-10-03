import getRegExpString from '../../utils/getRegExpString';
import { RuleType } from '../../../types';
import type { TokenResolver } from '../../../types';

export default function keywords(
    keywords: string[],
    tokenResolver: TokenResolver,
    lookahead: RegExp,
) {
    const search = `${getRegExpString(keywords)}(?!${lookahead.source})`;
    return { ruleType: RuleType.COMMON, tokenResolver, search };
}
