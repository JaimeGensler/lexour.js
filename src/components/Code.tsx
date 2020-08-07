import React, { useContext } from 'react';
import { LexerState } from 'moo';

import { AnnotationType } from '../types';
import { isTypeAnnotation, getAnnotationType } from '../utils/annotations';
import LexerContext from './Contexts/LexerContext';
import Line from './Line';
import Text from './Tokens/Text';
import KeepAnnotation from './Tokens/KeepAnnotation';
import MarkAnnotation from './Tokens/MarkAsAnnotation';

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

    const codeComponents = codeLines.map(codeLine => {
        const currentLine = lexerState.line;
        let shouldSkipLine = false;

        const tokens = Array.from(
            lexer.reset(`${codeLine}\n`, lexerState),
            ({ type, text, value, col, line }) => {
                // === Handle undefined tokens ===
                if (type === undefined) {
                    throw new TypeError(
                        `Lexer Error: Type of token "${value}" (line ${line}, col ${col}) is undefined!`,
                    );
                }

                // === Handle lexour annotations ===
                if (isTypeAnnotation(type)) {
                    const annotationType = getAnnotationType(value);

                    switch (annotationType) {
                        case AnnotationType.KEEP:
                            return <KeepAnnotation key={col} text={text} />;

                        case AnnotationType.NEXT_LINE:
                            lexerState.line = 5;
                            break;

                        case AnnotationType.MARK_AS:
                            return <MarkAnnotation key={col} value={value} />;

                        default:
                            shouldSkipLine = true;
                            return null;
                    }
                }

                // === Handle empty lines ===
                if (type === 'EMPTYLINE') {
                    // This is kind of a hacky solution, but it'll work for now
                    return <span key={col}> </span>;
                }

                return <Text key={col} value={value} type={type} />;
            },
        );

        lexerState = lexer.save();

        if (shouldSkipLine) {
            lexerState.line = currentLine;
            return null;
        }

        return (
            <Line
                lineNumber={showLineNumbers ? currentLine : 0}
                key={currentLine}
            >
                {tokens}
            </Line>
        );
    });

    return <>{codeComponents}</>;
}
