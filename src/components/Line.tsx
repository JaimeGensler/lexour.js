import React, { ReactNodeArray, CSSProperties } from 'react';
import useTheme from '../utils/useTheme';
import getLineNumberString from '../utils/getLineNumberString';

type Props = {
    lineNumber: number;
    showLineNumbers: boolean;
    children: ReactNodeArray;
};

const unselectable: CSSProperties = {
    MozUserSelect: 'none',
    WebkitUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
};

export default function Line({ lineNumber, showLineNumbers, children }: Props) {
    const style = useTheme('LINE_NUMBER');
    // This isn't an optimal solution to spacing numbers correctly
    // Maybe line numbers should get a fixed width based on the longest number
    // and right-aligned text? Or a table

    const lineNumComp = showLineNumbers ? (
        <span style={{ marginRight: '1rem', ...style, ...unselectable }}>
            {getLineNumberString(lineNumber)}
        </span>
    ) : null;

    return (
        <div>
            {lineNumComp}
            {children}
        </div>
    );
}
