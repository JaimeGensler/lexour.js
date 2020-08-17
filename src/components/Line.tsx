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
    // Better spacing solutions:
    // give line numbers fixed width and right-aligned text
    // put elements in a table (there are many consequences of doing this)

    const lineNumComp = !showLineNumbers ? null : (
        <span style={{ marginRight: '1rem', ...style, ...unselectable }}>
            {getLineNumberString(lineNumber)}
        </span>
    );

    return (
        <div>
            {lineNumComp}
            {children}
        </div>
    );
}
