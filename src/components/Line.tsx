import React, { ReactNode, ReactNodeArray, CSSProperties } from 'react';
import useTheme from './useTheme';
import getLineNumberString from '../utils/getLineNumberString';
import Text from './Tokens/Text';
import type { Token } from '../types';

type Props = {
    lineNumber: number;
    showLineNumbers: boolean;
    tokens: Token[];
};

const unselectable: CSSProperties = {
    MozUserSelect: 'none',
    WebkitUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
};

export default function Line({ lineNumber, showLineNumbers, tokens }: Props) {
    const style = useTheme('LINE_NUMBER');
    // Better spacing solutions:
    // give line numbers fixed width and right-aligned text
    // style elements as table

    const lineNumComp = !showLineNumbers ? null : (
        <span style={{ marginRight: '1rem', ...style, ...unselectable }}>
            {getLineNumberString(lineNumber)}
        </span>
    );

    const tokenComps = tokens.map((token, i) => <Text {...token} key={i} />);

    return (
        <div>
            {lineNumComp}
            {tokenComps}
        </div>
    );
}
