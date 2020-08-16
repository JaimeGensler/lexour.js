import React, { useContext, ReactNodeArray } from 'react';
import { LexerState } from 'moo';

import LexerContext from './Contexts/LexerContext';
import Line from './Line';
import getTokens from './Tokens';

type Props = {
    codeLines: string[];
    showLineNumbers: boolean;
    firstLine: number;
};

export default function Code({ codeLines, showLineNumbers, firstLine }: Props) {
    const lexer = useContext(LexerContext);

    let lexerState: LexerState = {
        ...lexer.reset().save(),
        line: firstLine,
    };
    console.log('starting at', firstLine);

    const codeComponents: ReactNodeArray = codeLines.map(codeLine => {
        const currentLine = lexerState.line;
        const tokens = getTokens(lexer, codeLine, lexerState);

        console.log(lexerState.line);

        // This resets it
        lexerState = lexer.save();

        if (tokens.length === 0) {
            lexerState.line--;
            return null;
        }

        return (
            <Line
                showLineNumbers={showLineNumbers}
                lineNumber={currentLine}
                key={currentLine}
            >
                {tokens}
            </Line>
        );
    });

    return <>{codeComponents}</>;
}
