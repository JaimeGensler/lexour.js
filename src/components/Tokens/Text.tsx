import React from 'react';
import useTheme from '../useTheme';

type Props = {
    type: string;
    value: string;
};
export default function Text({ type, value }: Props) {
    const style = useTheme(type);

    return (
        <span className={type} style={style}>
            {value}
        </span>
    );
}
