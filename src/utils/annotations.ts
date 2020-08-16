import { AnnotationType } from '../types';

export function isTypeAnnotation(type: string): boolean {
    return type.startsWith('LEXOUR_');
}

const expressions = {
    KEEP: /^KEEP[ \t]/,
    MARK_AS: /^MARK[ \t]+(.*?)[ \t]+AS[ \t]+(.+?)(?=[ \t]*@\*\/)?$/,
    NEXT_LINE: /^NEXT[ \t]+LINE[ \t]+([0-9]+)/,
};

export function getAnnotationType(value: string): AnnotationType {
    if (expressions.KEEP.test(value)) {
        return AnnotationType.KEEP;
    }
    if (expressions.NEXT_LINE.test(value)) {
        return AnnotationType.NEXT_LINE;
    }
    if (expressions.MARK_AS.test(value)) {
        return AnnotationType.MARK_AS;
    }
    return AnnotationType.COMMENT;
}

export function getMarkAnnotationMatches(value: string): [string, string] {
    const matches = expressions.MARK_AS.exec(value);
    if (matches === null) {
        // It shouldn't be possible to trip this, as the value has already been tested for a match
        throw new TypeError(
            `Error parsing annotation: Tried to read "${value}" as MARK_AS annotation but failed.`,
        );
    }
    const [, chars, tokenType] = matches;
    return [chars, tokenType];
}
export function getNextLineAnnotationNumber(value: string): number {
    const matches = expressions.NEXT_LINE.exec(value);
    if (matches === null) {
        // Same as above
        throw new TypeError(
            `Error parsing annotation: Tried to read "${value}" as NEXT_LINE annotation but failed.`,
        );
    }
    const nextLine = parseInt(matches[1], 10);
    if (Number.isNaN(nextLine)) {
        // Same as above, but it might be a better developer experience if this does get caught.
        // Currently, it will parse as a comment anno without warning
        throw new TypeError(
            `Error parsing annotation: Tried to read value of NEXT_LINE annotation ("${value}") but could not resolve it to an integer.`,
        );
    }
    return nextLine;
}
