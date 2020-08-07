import React, { useContext } from 'react';
import ThemeContext from '../Contexts/ThemeContext';

type Props = { value: string };
export default function MarkAsAnnotation({ value }: Props) {
    const theme = useContext(ThemeContext);
    // Extract this into a helper for better testing
    const match: any = /^MARK (.*?) AS (.*?)(?=[ \t]*@\*\/)?$/.exec(value);
    // @ts-ignore
    const style = theme.tokens[match[2].toUpperCase()];
    return <span style={style}>{match[1]}</span>;
}
