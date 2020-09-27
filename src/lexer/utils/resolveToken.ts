import type { Token, TokenResolver } from '../../types';

export default function resolveToken(
    value: string,
    tokenResolver: TokenResolver,
    actions: any,
): Token | Token[] {
    const res =
        tokenResolver instanceof Function
            ? tokenResolver(value, actions)
            : tokenResolver;

    return typeof res === 'string' ? { value, type: res } : res;
}
