import shouldMergeTokens from '../utils/shouldMergeTokens';
import Lexour from '../tokenTypes/lexour';
import type { Token } from '../../types';

type Block = Array<[number, ...Token[]]>;

const linebreak = /\r\n|\r|\n/;
export default function getBlockManager(firstLine: number) {
    const block: Block = [];
    const currentLine: Token[] = [];
    const lineNumbers = {
        current: firstLine,
        next: firstLine + 1,
        largest: firstLine,
    };

    const addLineToBlock = () => {
        if (lineNumbers.current > lineNumbers.largest) {
            lineNumbers.largest = lineNumbers.current;
        }
        block.push([lineNumbers.current, ...currentLine]);
        lineNumbers.current = lineNumbers.next;
        lineNumbers.next++;
        currentLine.length = 0;
    };

    const trueProcess = ({ value, type }: Token) => {
        if (type === Lexour.NEXT_LINE_ANNOTATION) {
            lineNumbers.next = parseInt(value, 10);
            return;
        }

        value.split(linebreak).forEach((line, i, { length: numberOfLines }) => {
            if (line.length > 0) {
                const currentToken = { type, value: line };
                const previousToken = currentLine[currentLine.length - 1];
                if (!shouldMergeTokens(previousToken, currentToken)) {
                    currentLine.push(currentToken);
                } else {
                    previousToken.type =
                        currentToken.type === Lexour.EMPTY
                            ? previousToken.type
                            : currentToken.type;
                    previousToken.value += currentToken.value;
                }
            }
            if (i < numberOfLines - 1) {
                addLineToBlock();
            }
        });
    };

    const getBlock = () => {
        if (currentLine.length !== 0) {
            addLineToBlock();
        }
        return { largestLineNumber: lineNumbers.largest, block };
    };
    const processTokens = (tokens: Token | Token[]) => {
        if (Array.isArray(tokens)) {
            tokens.forEach(token => trueProcess(token));
        } else {
            trueProcess(tokens);
        }
    };

    return { getBlock, processTokens };
}
