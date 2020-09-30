import buildLexer from './builders/buildLexer';
export { buildLexer };
export * from './builders/rules';

import getStateManager from './managers/getStateManager';
import getBlockManager from './managers/getBlockManager';
import getVariableManager from './managers/getVariableManager';
import resolveToken from './utils/resolveToken';
import shouldDumpRegister from './utils/shouldDumpRegister';
import type { Lexer } from '../types';

export default function tokenizeString(
    { defaultState, states: lexerStates }: Lexer,
    register: string,
    firstLine: number,
) {
    const { getBlock, processTokens } = getBlockManager(firstLine);
    const { getState, ...stateActions } = getStateManager(defaultState);
    const actions = { ...stateActions, ...getVariableManager() };

    while (register.length > 0) {
        const state = getState();
        if (!(state in lexerStates)) {
            throw new Error(`State "${state}" not found in lexer rules.`);
        }
        const { hasRemainderHandler, tokenResolvers, search } = lexerStates[
            state
        ];
        const searchResult = search.exec(register);

        // ===== DUMP REGISTER =====
        if (shouldDumpRegister(searchResult, hasRemainderHandler)) {
            const token = resolveToken(register, tokenResolvers[0], actions);
            processTokens(token);
            break;
        }

        // ===== HANDLE REMAINDER =====
        if (searchResult.index !== 0) {
            const value = register.slice(0, searchResult.index);
            register = register.slice(searchResult.index);
            const token = resolveToken(value, tokenResolvers[0], actions);
            processTokens(token);
        }

        // ===== HANDLE MATCH =====
        const matchIndex = searchResult.findIndex(
            (x, i) => x !== undefined && i !== 0,
        );
        const value = searchResult[matchIndex];
        if (value.length === 0) {
            throw new Error(
                `Lexer rule (no. ${matchIndex} of state "${state}") matched an empty string.`,
            );
        }
        const tokenResolver = tokenResolvers[matchIndex];

        const token = resolveToken(value, tokenResolver, actions);
        processTokens(token);
        register = register.slice(value.length);
    }
    return getBlock();
}
