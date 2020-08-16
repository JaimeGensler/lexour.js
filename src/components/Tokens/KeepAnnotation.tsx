import React, { useContext } from 'react';
import ThemeContext from '../Contexts/ThemeContext';

type Props = { text: string };
export default function KeepAnnotation({ text }: Props) {
    const { tokens } = useContext(ThemeContext);

    const style = tokens?.['COMMENT'];
    return <span style={style}>{text.replace(/KEEP[ \t]/, '')}</span>;
}
