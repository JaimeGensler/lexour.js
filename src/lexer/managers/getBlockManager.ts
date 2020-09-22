import type { Token, TokenResolver } from '../../types';
import resolveToken from '../utils/resolveToken';

type Line = Token[];
type Block = Array<[number, ...Line]>;

export default function getBlockManager(firstLine: number) {
    let currentLineNumber = firstLine;
    let nextLineNumber = firstLine + 1;
    const block: Block = [];
    const line: Line = [];

    const getBlock = () => {
        if (line.length !== 0) {
            block.push([currentLineNumber, ...line]);
        }
        return block;
    };

    const addToken = (
        tokenResolver: TokenResolver,
        value: string,
        actions: any,
    ) => {
        const token = resolveToken(tokenResolver, value, actions);
        line.push(token);
    };
    const addToMostRecentToken = (extra: string) => {
        if (line.length > 0) {
            line[line.length - 1].value += extra;
        }
    };
    const startNewLine = (indent: string) => {
        block.push([currentLineNumber, ...line]);
        line.length = 0;
        if (indent.length > 0) {
            line.push({ value: indent, type: 'INDENTATION' });
        }
    };
    const handleWhitespace = (whitespace: string) => {
        const lines = whitespace.split(/\r\n|\r|\n/);
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
