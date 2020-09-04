import React from 'react';
import { getMarkAnnotationMatches } from '../../utils/annotations';
import useTheme from '../useTheme';

type Props = { value: string };
export default function MarkAsAnnotation({ value }: Props) {
    const [chars, tokenType] = getMarkAnnotationMatches(value);
    const style = useTheme(tokenType);

    return (
        <span className="lexour.annotation" style={style}>
            {chars}
        </span>
    );
}
