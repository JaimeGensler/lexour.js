import React, { useContext } from 'react';
import ThemeContext from './Contexts/ThemeContext';
import getLineNumberString from '../utils/getLineNumberString';

type Props = {
    lineNumber: number;
    children: React.ReactNodeArray;
};

export default function Line({ lineNumber, children }: Props) {
    const { lineNumbers } = useContext(ThemeContext);
    // This probably isn't an optimal solution to spacing numbers correctly
    // Maybe line numbers should get a fixed width based on the longest number
    // and right-aligned text?

    const style = lineNumbers || {};
    const lineNumComp = lineNumber ? (
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
