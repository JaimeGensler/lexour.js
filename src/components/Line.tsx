import React from 'react';
import useTheme from '../utils/useTheme';
import getLineNumberString from '../utils/getLineNumberString';

type Props = {
    lineNumber: number;
    showLineNumbers: boolean;
    children: React.ReactNodeArray;
};

export default function Line({ lineNumber, showLineNumbers, children }: Props) {
    const style = useTheme('LINE_NUMBER');
    // This isn't an optimal solution to spacing numbers correctly
    // Maybe line numbers should get a fixed width based on the longest number
    // and right-aligned text? Or a table

    const lineNumComp = showLineNumbers ? (
        <span style={{ margin: '0 1rem 0 0.25rem', ...style }}>
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
