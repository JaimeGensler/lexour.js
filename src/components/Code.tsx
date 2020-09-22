import React, { ReactNodeArray } from 'react';
import Lexer from '../Lexer';

import Line from './Line';
import getTokens from './Tokens';
import getLineTracker from '../utils/getLineTracker';

type Props = {
    lexer: Lexer;
    codeLines: string[];
    showLineNumbers: boolean;
    firstLine: number;
};

export default function Code({
    lexer,
    codeLines,
    showLineNumbers,
    firstLine,
}: Props) {
    const lineTracker = getLineTracker(firstLine);

    const codeComponents: ReactNodeArray = codeLines.map(codeLine => {
        lineTracker.advance();
        const tokens = lexer.$$feed(codeLine);
        if (tokens.length === 0) {
            return null;
        }
        const tokenComps = undefined;

        return (
            <Line
                showLineNumbers={showLineNumbers}
                lineNumber={lineTracker.getCurrent()}
                key={lineTracker.getCurrent()}
            >
                {tokenComps}
            </Line>
        );
    });

    return <>{codeComponents}</>;
}
