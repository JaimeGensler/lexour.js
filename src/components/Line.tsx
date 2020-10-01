import React from 'react';
import useTheme from './Theme/useTheme';
import Text from './Text';
import type { Token } from '../types';
import Conditional from './Conditional';

type Props = {
    lineNumber: string;
    showLineNumbers: boolean;
    tokens: Token[];
};

const unselectable: React.CSSProperties = {
    MozUserSelect: 'none',
    WebkitUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',

    marginRight: '1rem',
};

export default function Line({ lineNumber, showLineNumbers, tokens }: Props) {
    const style = useTheme('lexour.lineNumbers', true);
    const tokenComps = tokens.map((token, i) => <Text {...token} key={i} />);

    return (
        <div style={{ flex: 1 }}>
            <Conditional shouldRender={showLineNumbers}>
                <span style={{ ...unselectable, ...style }}>{lineNumber}</span>
            </Conditional>
            {tokenComps}
        </div>
    );
}
