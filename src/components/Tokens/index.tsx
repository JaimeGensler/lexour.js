import React, { ReactNodeArray } from 'react';
import { Lexer } from 'moo';
import {
    isTypeAnnotation,
    getAnnotationType,
    getNextLineAnnotationNumber,
} from '../../utils/annotations';
import { AnnotationType, LineTracker } from '../../types';
import KeepAnnotation from './KeepAnnotation';
import MarkAsAnnotation from './MarkAsAnnotation';
import Text from './Text';

export default function getTokens(
    lexer: Lexer,
    lineTracker: LineTracker,
): ReactNodeArray {
    return Array.from(lexer, ({ type, value, text, line, col }) => {
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
                    lineTracker.jumpTo(getNextLineAnnotationNumber(value));
                    return null;

                case AnnotationType.MARK_AS:
                    return <MarkAsAnnotation key={col} value={value} />;

                default:
                    return null;
            }
        }

        // === Handle special cases ===
        if (type === 'NEWLINE') {
            return null;
        }
        if (type === 'EMPTYLINE') {
            value.replace('\n', '\u00A0');
        }

        return <Text key={col} value={value} type={type} />;
    }).filter(x => x !== null);
}
