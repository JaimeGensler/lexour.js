import getStateManager from './managers/getStateManager';
import getBlockManager from './managers/getBlockManager';
import getVariableManager from './managers/getVariableManager';
import type { Lexer } from './builders/lexer';

export default function tokenizeString(
    { defaultState, states: lexerStates }: Lexer,
    register: string,
    firstLine: number,
) {
    const { getBlock, addToken, handleWhitespace } = getBlockManager(firstLine);
    const { getState, ...stateActions } = getStateManager(defaultState);
    const actions = { ...stateActions, ...getVariableManager() };

    let r = 0;
    while (register.length > 0) {
        // ===== TEMP -- CATCH RUNAWAY =====
        r++;
        if (r > 50) throw new Error('Too many runs!');

        // ===== NEWLINE/INDENT HANDLER =====
        const whitespace = /^[\s]+/.exec(register);
        if (!!whitespace) {
            handleWhitespace(whitespace[0]);
            register = register.slice(whitespace[0].length);
        }

        // ===== SEARCH FOR MATCH =====
        const { hasRemainderHandler, tokenResolvers, search } = lexerStates[
            getState()
        ];
        const searchResult = search.exec(register);
        // ===== NO HANDLER or NO MATCH =====
        if (
            searchResult === null ||
            (searchResult.index !== 0 && !hasRemainderHandler)
        ) {
            addToken(tokenResolvers[0], register, actions);
            break;
        }
        // ===== REMAINDER HANDLER =====
        if (searchResult.index !== 0) {
            const value = register.slice(0, searchResult.index);
            register = register.slice(searchResult.index);
            addToken(tokenResolvers[0], value, actions);
        }
        // ===== SEND TOKEN IN =====
        const matchIndex = searchResult.findIndex(
            (x: string, i: number) => x !== undefined && i !== 0,
        );
        const value = searchResult[matchIndex];
        if (value.length === 0) {
            throw new Error(
                `A lexer rule (no. ${matchIndex}) matched an empty string.`,
            );
        }
        const tokenResolver = tokenResolvers[matchIndex];
        addToken(tokenResolver, value, actions);
        register = register.slice(value.length);
    }
    return getBlock();
}
