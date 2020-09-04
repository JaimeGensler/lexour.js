import React from 'react';
import useTheme from '../useTheme';
import { cleanKeepAnnotationText } from '../../utils/annotations';

type Props = { text: string };
export default function KeepAnnotation({ text }: Props) {
    const style = useTheme('comment');

    return (
        <span className="lexour.annotation" style={style}>
            {cleanKeepAnnotationText(text)}
        </span>
    );
}
