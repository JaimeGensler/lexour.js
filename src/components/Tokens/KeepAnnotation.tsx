import React from 'react';
import useTheme from '../../utils/useTheme';

type Props = { text: string };
export default function KeepAnnotation({ text }: Props) {
    const style = useTheme('comment');

    return (
        <span className="lexour.annotation" style={style}>
            {text.replace(/KEEP[ \t]/, '')}
        </span>
    );
}
