import React, { useContext } from 'react';
import ThemeContext from '../Contexts/ThemeContext';

type Props = {
    type: string;
    value: string;
};
export default function Text({ type, value }: Props) {
    const { tokens } = useContext(ThemeContext);

    // REFACTOR THIS WHEN YOU CLEAN UP TOKEN NAMES
    const primaryType = type.replace(/(?<=^_?[A-Z]+)_.+/, '');
    const style = tokens?.[primaryType];

    return <span style={style}>{value}</span>;
}
