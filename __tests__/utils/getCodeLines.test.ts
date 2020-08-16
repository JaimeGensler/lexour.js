import getCodeLines from '../../utils/getCodeLines';

describe('getCodeLines()', () => {
    test('returns <string[]>, split by newline', () => {
        const str = 'line1\nline2\nline3\nline4';
        expect(getCodeLines(str)).toEqual(['line1', 'line2', 'line3', 'line4']);
    });
    test('removes the first and last newline char', () => {
        const str = '\nline1\nline2\nline3\n';
        expect(getCodeLines(str)).toEqual(['line1', 'line2', 'line3']);
    });
    test('removes ONLY the very first and very last newline', () => {
        const str = '\n\n\nline1\nline2\nline3\n\n\n';
        expect(getCodeLines(str)).toEqual([
            '',
            '',
            'line1',
            'line2',
            'line3',
            '',
            '',
        ]);
    });
});
