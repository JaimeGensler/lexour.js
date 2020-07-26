import React from 'react';
import { Token } from 'moo';
import { Theme } from '../types';

type Props = {
    type: string;
    value: string;
    theme: any;
};

export default function Token({ type, value, theme }: Props) {
    if (type === 'NEWLINE' || !type) return null;

    const primaryType = type.replace(/(?<=^_?[A-Z]+)_.+/, '');
    const styles = theme[primaryType] || undefined;
    return <span style={styles}>{value}</span>;
}
