import type { Token } from '../../types';

export default function splitLastChar(type1: string, type2: string) {
    return (match: string) => {
        const token1 = {
            value: match.slice(0, match.length - 1),
            type: type1,
        };
        const token2 = {
            value: match.charAt(match.length - 1),
            type: type2,
        };
        return [token1, token2];
    };
}
