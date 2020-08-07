import { AnnotationType } from '../types';

export function isTypeAnnotation(type: string): boolean {
    return type.startsWith('LEXOUR_');
}

export function getAnnotationType(value: string): AnnotationType {
    if (/^KEEP[ \t]/.test(value)) {
        return AnnotationType.KEEP;
    }
    if (/^NEXT LINE[ \t]/.test(value)) {
        return AnnotationType.NEXT_LINE;
    }
    if (/^MARK .*? AS .*?$/.test(value)) {
        return AnnotationType.MARK_AS;
    }

    return AnnotationType.COMMENT;
}
