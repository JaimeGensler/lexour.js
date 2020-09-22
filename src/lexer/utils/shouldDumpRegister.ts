export default function shouldDumpRegister(
    searchResult: RegExpExecArray | null,
    hasRemainderHandler: boolean,
): searchResult is null {
    return searchResult === null
        ? true
        : searchResult.index !== 0 && !hasRemainderHandler;
}
