import { LineTracker } from '../types';

export default function getLineTracker(firstLine: number): LineTracker {
    let current: number = 0;
    let next: number = firstLine;
    return {
        getCurrent: () => current,
        advance: () => {
            current = next;
            next = next + 1;
        },
        jumpTo: (lineNumber: number) => {
            // This is always called after advance, and should not modify current.
            next = lineNumber;
        },
    };
}
