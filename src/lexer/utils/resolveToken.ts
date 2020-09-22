import type { Token, TokenResolver } from '../../types';

export default function resolveToken(
    tokenResolver: TokenResolver,
    value: string,
    actions: any,
): Token {
    const res =
        tokenResolver instanceof Function
            ? tokenResolver(value, actions)
            : tokenResolver;

    return typeof res !== 'string' ? res : { value, type: res };
}
