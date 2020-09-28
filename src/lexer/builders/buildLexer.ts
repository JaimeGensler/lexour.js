import { RuleType } from '../../types';
import type { Rule } from '../../types';
import type { TokenResolver } from '../../types';

export interface LexerStateRules {
    readonly hasRemainderHandler: boolean;
    readonly search: RegExp;
    readonly tokenResolvers: TokenResolver[];
}
export interface Lexer {
    readonly defaultState: string;
    readonly states: Record<string, LexerStateRules>;
}

export default function buildLexer(defaultState: string) {
    const lexer: Lexer = { defaultState, states: {} };

    const build = () => lexer;
    const addState = (stateName: string, ...rules: Rule[]) => {
        let hasRemainderHandler = false;
        const { searchGroups, tokenResolvers } = rules.reduce(
            (acc, { ruleType, ...data }) => {
                if (ruleType === RuleType.COMMON) {
                    acc.searchGroups.push(`(${data.search})`);
                    acc.tokenResolvers.push(data.tokenResolver);
                } else if (ruleType === RuleType.REMAINDER) {
                    acc.tokenResolvers[0] = data.tokenResolver;
                    hasRemainderHandler = true;
                }
                return acc;
            },
            {
                searchGroups: [] as string[],
                tokenResolvers: ['invalid'] as TokenResolver[],
            },
        );
        searchGroups.push('(\\s+)');
        tokenResolvers.push('lexour.empty');
        const search = new RegExp(searchGroups.join('|'), 'm');

        lexer.states[stateName] = {
            hasRemainderHandler,
            search,
            tokenResolvers,
        };
        return { addState, build };
    };

    return { addState, build };
}
