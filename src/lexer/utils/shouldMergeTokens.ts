import type { Token } from '../../types';
import Lexour from '../tokenTypes/lexour';

export default function shouldMergeTokens(
    previousToken: Token | undefined,
    currentToken: Token,
) {
    return (
        previousToken !== undefined &&
        (previousToken.type === Lexour.EMPTY ||
            currentToken.type === Lexour.EMPTY ||
            previousToken.type === currentToken.type)
    );
}
