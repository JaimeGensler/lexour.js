import buildLexer from './builders/buildLexer';
export { buildLexer };
export * from './builders/rules';

import getStateManager from './managers/getStateManager';
import getBlockManager from './managers/getBlockManager';
import getVariableManager from './managers/getVariableManager';
import resolveToken from './utils/resolveToken';
import shouldDumpRegister from './utils/shouldDumpRegister';
import type { Lexer } from './builders/buildLexer';

export default function tokenizeString(
    { defaultState, states: lexerStates }: Lexer,
    register: string,
    firstLine: number,
) {
    const { getBlock, processToken } = getBlockManager(firstLine);
    const { getState, ...stateActions } = getStateManager(defaultState);
    const actions = { ...stateActions, ...getVariableManager() };

    while (register.length > 0) {
        // ===== NEWLINE/INDENT HANDLER =====
        const startingWhitespace = /^[\s]+/.exec(register);
        if (!!startingWhitespace) {
            processToken({ type: 'EMPTY', value: startingWhitespace[0] });
            register = register.slice(startingWhitespace[0].length);
        }

        // ===== SEARCH FOR MATCH =====
        const { hasRemainderHandler, tokenResolvers, search } = lexerStates[
            getState()
        ];
        const searchResult = search.exec(register);
        // ===== DUMP REGISTER =====
        if (shouldDumpRegister(searchResult, hasRemainderHandler)) {
            const token = resolveToken(register, tokenResolvers[0], actions);
            processToken(token);
            break;
        }
        // ===== HANDLE REMAINDER =====
        if (searchResult.index !== 0) {
            const value = register.slice(0, searchResult.index);
            register = register.slice(searchResult.index);
            const token = resolveToken(value, tokenResolvers[0], actions);
            processToken(token);
        }
        // ===== SEND TOKEN IN =====
        const matchIndex = searchResult.findIndex(
            (x, i) => x !== undefined && i !== 0,
        );
        const value = searchResult[matchIndex];
        if (value.length === 0) {
            throw new Error(
                `A lexer rule (no. ${matchIndex}) matched an empty string.`,
            );
        }
        const tokenResolver = tokenResolvers[matchIndex];

        const token = resolveToken(value, tokenResolver, actions);
        processToken(token);
        register = register.slice(value.length);
    }
    return getBlock();
}
