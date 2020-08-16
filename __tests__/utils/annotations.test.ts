import {
    isTypeAnnotation,
    getAnnotationType,
} from '../../src/utils/annotations';
import { AnnotationType } from '../../src/types';

describe('Annotation Helpers:', () => {
    describe('isTypeAnnotation()', () => {
        test('returns TRUE if input string starts with "LEXOUR_"', () => {
            expect(isTypeAnnotation('LEXOUR_')).toBe(true);
            expect(isTypeAnnotation('LEXOUR_anythingElse')).toBe(true);
            expect(isTypeAnnotation('LEXOUR_LEXOUR_LEXOUR_')).toBe(true);
        });
        test('returns FALSE if input string does not start with "LEXOUR_"', () => {
            expect(isTypeAnnotation('_LEXOUR_')).toBe(false);
            expect(isTypeAnnotation(' LEXOUR_')).toBe(false);
            expect(isTypeAnnotation('someStringLEXOUR_')).toBe(false);
        });
    });

    describe('getAnnotationType()', () => {
        test('returns "KEEP" for keep annotations', () => {
            expect(getAnnotationType('KEEP some annotation metacomment')).toBe(
                AnnotationType.KEEP,
            );
        });
        test('returns "MARK_AS" for mark_as annotations', () => {
            expect(getAnnotationType('MARK someString AS someTokenType')).toBe(
                AnnotationType.MARK_AS,
            );
        });
        test('returns "NEXT_LINE" for next_line annotations', () => {
            expect(getAnnotationType('NEXT LINE 85')).toBe(
                AnnotationType.NEXT_LINE,
            );
        });
        test('returns COMMENT for all other annotations', () => {
            expect(getAnnotationType('KEP misspelled keep annotation')).toBe(
                AnnotationType.COMMENT,
            );
            expect(getAnnotationType('MARK something ASaconstant')).toBe(
                AnnotationType.COMMENT,
            );
            expect(getAnnotationType('NEXT_LINE oops')).toBe(
                AnnotationType.COMMENT,
            );
        });
    });
});
