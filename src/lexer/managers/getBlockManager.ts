import type { Token } from '../../types';

type Line = Token[];
type Block = Array<[number, ...Line]>;

const linebreak = /\r\n|\r|\n/;

export default function getBlockManager(firstLine: number) {
    const block: Block = [];
    const currentLine: Line = [];
    let currentLineNumber = firstLine;
    let nextLineNumber = firstLine + 1;
    let largestLineNumber = nextLineNumber;

    const setLargest = (newLargest: number) => {
        if (newLargest > largestLineNumber) largestLineNumber = newLargest;
    };

    const addLineToBlock = () => {
        setLargest(currentLineNumber);
        block.push([currentLineNumber, ...currentLine]);
        currentLineNumber = nextLineNumber;
        nextLineNumber++;
        currentLine.length = 0;
    };
    const shouldMergeTokens = (
        previousToken: Token | undefined,
        currentToken: Token,
    ) => {
        // Merge if there is a previous token (not a fresh line), and
        // its type is either "EMPTY" or the same as the current.
        return (
            previousToken !== undefined &&
            (previousToken.type === 'EMPTY' ||
                currentToken.type === 'EMPTY' ||
                previousToken.type === currentToken.type)
        );
    };

    const getBlock = () => {
        if (currentLine.length !== 0) {
            addLineToBlock();
        }
        return { largestLineNumber, block };
    };
    const processTokens = (tokens: Token | Token[]) => {
        if (Array.isArray(tokens)) {
            tokens.forEach(token => trueProcess(token));
        } else {
            trueProcess(tokens);
        }
    };
    const trueProcess = ({ value, type }: Token) => {
        if (type === 'lexour.annotation.nextLine') {
            nextLineNumber = parseInt(value, 10);
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
                        currentToken.type === 'EMPTY'
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

    return { getBlock, processTokens };
}
