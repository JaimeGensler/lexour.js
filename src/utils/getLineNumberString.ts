// This will likely be reworked in the future. Take a number and turn it into
// a string with up to 3 whitespaces before it. 4 => "   4", 400 => " 400"

export default function getLineNumberString(lineNumber: number): string {
    const lineNumberString = String(lineNumber);
    return `${' '.repeat(4 - lineNumberString.length)}${lineNumberString}`;
}
