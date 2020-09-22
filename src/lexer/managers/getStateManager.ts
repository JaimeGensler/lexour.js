export default function getStateManager(initialState: string) {
    const stateStack: string[] = [initialState];

    return {
        getState: () => stateStack[stateStack.length - 1],
        pushState: (nextState: string) => stateStack.push(nextState),
        popState: () => {
            if (stateStack.length > 1) {
                stateStack.pop();
            }
            return stateStack[stateStack.length - 1];
        },
    };
}
