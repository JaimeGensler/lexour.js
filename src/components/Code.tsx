import React, { useContext, ReactNodeArray } from 'react';

import LexerContext from './Contexts/LexerContext';
import Line from './Line';
import getTokens from './Tokens';
import getLineTracker from '../utils/getLineTracker';

type Props = {
    codeLines: string[];
    showLineNumbers: boolean;
    firstLine: number;
};

export default function Code({ codeLines, showLineNumbers, firstLine }: Props) {
    const lexer = useContext(LexerContext);
    const lineTracker = getLineTracker(firstLine);

    const codeComponents: ReactNodeArray = codeLines.map(codeLine => {
        lineTracker.advance();

        lexer.reset(`${codeLine}\n`, lexer.save());
        const tokens = getTokens(lexer, lineTracker);

        return tokens.length === 0 ? null : (
            <Line
                showLineNumbers={showLineNumbers}
                lineNumber={lineTracker.getCurrent()}
                key={lineTracker.getCurrent()}
            >
                {tokens}
            </Line>
        );
    });

    return <>{codeComponents}</>;
}
