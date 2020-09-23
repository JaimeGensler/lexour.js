import React from 'react';
import useTheme from './useTheme';
import Text from './Tokens/Text';
import type { Token } from '../types';

type Props = {
    lineNumber: number;
    showLineNumbers: boolean;
    tokens: Token[];
};

const unselectable: React.CSSProperties = {
    MozUserSelect: 'none',
    WebkitUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',

    // Hacky temporary solution
    width: 1,
    whiteSpace: 'nowrap',

    display: 'table-cell',
    paddingRight: '1rem',
    textAlign: 'right',
};

export default function Line({ lineNumber, showLineNumbers, tokens }: Props) {
    const style = useTheme('LINE_NUMBER');

    const lineNumComp = !showLineNumbers ? null : (
        <div
            style={{
                ...unselectable,
                ...style,
            }}
        >
            {lineNumber}
        </div>
    );

    const tokenComps = tokens.map((token, i) => <Text {...token} key={i} />);

    return (
        <div style={{ display: 'table-row' }}>
            {lineNumComp}
            <div style={{ display: 'table-cell' }}>{tokenComps}</div>
        </div>
    );
}
