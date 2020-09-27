const cleanString = (str: string) =>
    str.replace(/[-\\\.\*\+\?\^\$\{\}\(\)\|\[\]]/g, '\\$&');

export default function getRegExpString(input: string | RegExp | string[]) {
    if (Array.isArray(input)) {
        return input.map(x => `(?:${cleanString(x)})`).join('|');
    }
    if (typeof input === 'string') {
        return cleanString(input);
    }
    return input.source;
}
