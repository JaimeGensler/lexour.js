import type { Token } from '../../types';

export enum AnnotationType {
    COMMENT = 'COMMENT',
    KEEP = 'KEEP',
    NEXT_LINE = 'NEXT_LINE',
    MARK_AS = 'MARK',
}
const annoSearch = {
    KEEP: /^KEEP[\s]/,
    MARK_AS: /^MARK[\s]+(.+?)[\s]+AS[\s]+(.+)$/,
    NEXT_LINE: /^NEXT[\s]+LINE[\s]+([0-9]+)$/,
};

export function getAnnotationType(value: string): AnnotationType {
    if (annoSearch.KEEP.test(value)) {
        return AnnotationType.KEEP;
    }
    if (annoSearch.NEXT_LINE.test(value)) {
        return AnnotationType.NEXT_LINE;
    }
    if (annoSearch.MARK_AS.test(value)) {
        return AnnotationType.MARK_AS;
    }
    return AnnotationType.COMMENT;
}

export function getKeepToken(match: string): Token {
    return { value: match.replace(/KEEP[\s]/, ''), type: 'comment' };
}

export function getMarkAsToken(match: string): Token {
    const [, value, type] = annoSearch.MARK_AS.exec(match)!; // Has already been tested to match
    return { value, type };
}
export function getNextLineToken(match: string): Token {
    const [, value] = annoSearch.NEXT_LINE.exec(match)!; // Has already been tested to match
    return { value, type: 'lexour.annotation.nextLine' };
}
