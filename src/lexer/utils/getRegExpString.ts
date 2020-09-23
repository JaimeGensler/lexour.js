export default function getRegExpString(input: string | RegExp) {
    if (typeof input === 'string') {
        return input.replace(/[-\\\.\*\+\?\^\$\{\}\(\)\|\[\]]/g, '\\$&');
    }
    return input.source;
}
