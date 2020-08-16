import React, { useContext } from 'react';
import ThemeContext from '../Contexts/ThemeContext';
import { getMarkAnnotationMatches } from '../../utils/annotations';

type Props = { value: string };
export default function MarkAsAnnotation({ value }: Props) {
    const { tokens } = useContext(ThemeContext);
    const [chars, tokenType] = getMarkAnnotationMatches(value);
    const style = tokens?.[tokenType.toUpperCase()];
    return <span style={style}>{chars}</span>;
}
