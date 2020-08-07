import React, { useContext } from 'react';
import ThemeContext from '../Contexts/ThemeContext';

type Props = {
    type: string;
    value: string;
};
export default function Text({ type, value }: Props) {
    const { tokens } = useContext(ThemeContext);

    const primaryType = type.replace(/(?<=^_?[A-Z]+)_.+/, '');
    // @ts-ignore Will fix when token names and style fetch is reworked
    const style = tokens[primaryType];

    return <span style={style}>{value}</span>;
}
