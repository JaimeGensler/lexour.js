import React from 'react';
import useTheme from './Theme/useTheme';
import Text from './Text';
import type { Token } from '../types';
import Conditional from './Conditional';

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

    // Hacky temporary solution to getting it to be exact width of text, replace this
    width: 1,
    whiteSpace: 'nowrap',

    display: 'table-cell',
    paddingRight: '1rem',
    textAlign: 'right',
};

export default function Line({ lineNumber, showLineNumbers, tokens }: Props) {
    const style = useTheme('LINE_NUMBER');
    const tokenComps = tokens.map((token, i) => <Text {...token} key={i} />);

    return (
        <div style={{ display: 'table-row' }}>
            <Conditional shouldRender={showLineNumbers}>
                <div style={{ ...unselectable, ...style }}>{lineNumber}</div>
            </Conditional>
            <div style={{ display: 'table-cell' }}>{tokenComps}</div>
        </div>
    );
}
