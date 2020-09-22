export default function getRegExpString(input: string | RegExp) {
    if (typeof input === 'string') {
        // TO DO: Escape RegExp characters in string
        return input;
    }
    return input.source;
}
