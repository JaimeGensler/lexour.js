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
        ...lexer.save(),
        line: firstLine,
    };

    const codeComponents: ReactNodeArray = codeLines.map(codeLine => {
        const currentLine = lexerState.line;
        const tokens = getTokens(
            lexer.reset(`${codeLine}\n`, lexerState),
            lexerState,
        );
        const nextLine = tokens.length ? lexerState.line + 1 : lexerState.line;

        lexerState = { ...lexer.save(), line: nextLine };

        // Skip line if there are no tokens to render (only contains annotations)
        if (tokens.length === 0) {
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
