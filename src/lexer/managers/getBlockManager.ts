import type { Token } from '../../types';
type Line = Token[];
type Block = Array<[number, ...Line]>;

const linebreak = /\r\n|\r|\n/;

export default function getBlockManager(firstLine: number) {
    let currentLineNumber = firstLine;
    let nextLineNumber = firstLine + 1;
    const block: Block = [];
    const currentLine: Line = [];

    const addLineToBlock = () => {
        block.push([currentLineNumber, ...currentLine]);
        currentLineNumber = nextLineNumber;
        nextLineNumber++;
        currentLine.length = 0;
    };

    const getBlock = () => {
        if (currentLine.length !== 0) {
            addLineToBlock();
        }
        return block;
    };

    const addToken = ({ value, type }: Token) => {
        if (type === 'lexour.annotation.nextLine') {
            nextLineNumber = parseInt(value, 10);
            return;
        }
        if (!linebreak.test(value)) {
            currentLine.push({ value, type });
            return;
        }
        value.split(linebreak).forEach((line, i, { length }) => {
            if (line.length !== 0) {
                currentLine.push({ value: line, type });
            }
            if (i < length - 1) {
                addLineToBlock();
            }
        });
    };
    const addToMostRecentToken = (addition: string) => {
        if (currentLine.length > 0) {
            currentLine[currentLine.length - 1].value += addition;
        }
    };
    const startNewLine = (indent: string) => {
        addLineToBlock();
        if (indent.length > 0) {
            currentLine.push({ value: indent, type: 'INDENTATION' });
        }
    };
    const handleWhitespace = (whitespace: string) => {
        const lines = whitespace.split(linebreak);
        lines.forEach((line, i) => {
            if (i === 0) {
                addToMostRecentToken(line);
            } else {
                startNewLine(line);
            }
        });
    };

    return { getBlock, addToken, handleWhitespace };
}
