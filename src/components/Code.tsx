import React, { useContext, ReactNodeArray } from 'react';

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

    const lineNumbers = { current: -1, next: firstLine };

    const codeComponents: ReactNodeArray = codeLines.map(codeLine => {
        lineNumbers.current = lineNumbers.next;
        lineNumbers.next = lineNumbers.current + 1;

        lexer.reset(`${codeLine}\n`, lexer.save());
        const tokens = getTokens(lexer, lineNumbers);

        // Skip line if there are no tokens to render (only contains annotations)
        return tokens.length === 0 ? null : (
            <Line
                showLineNumbers={showLineNumbers}
                lineNumber={lineNumbers.current}
                key={lineNumbers.current}
            >
                {tokens}
            </Line>
        );
    });

    return <>{codeComponents}</>;
}
