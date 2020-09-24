export default function getSpacedLineNumber(current: number, largest: number) {
    const ln = String(current);
    return `${' '.repeat(String(largest).length - ln.length)}${ln}`;
}
