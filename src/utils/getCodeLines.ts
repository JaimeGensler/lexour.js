// Remove the very first and very last line newline in a string, if they exist. (and split)
// Intended to let code be declared like the following:

// const code = `
//     console.log('someString');
//     someArray.map(x => x * 2);
// `
export default function getCodeLines(code: string): string[] {
    return code.replace(/(?:^\n)|(?:\n$)/g, '').split('\n');
}
