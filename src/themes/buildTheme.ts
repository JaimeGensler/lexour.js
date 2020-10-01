import type { CSSProperties } from 'react';
import type { Theme } from '../types';

export default function buildTheme(blockStyles: CSSProperties) {
    const theme: Theme = {
        'lexour.block': blockStyles,
    };
    const lineNumbers = (obj: CSSProperties) => {
        theme['lexour.lineNumbers'] = obj;
        return builderObject;
    };
    const invalid = (obj: CSSProperties) => {
        theme['invalid'] = obj;
        return builderObject;
    };

    const apply = (property: string, value: string, tokenTypes: string[]) => {
        tokenTypes.forEach(tokenType => {
            if (!(tokenType in theme)) {
                theme[tokenType] = {};
            }
            //@ts-ignore: TS doesn't like this, but it's fine
            theme[tokenType][property] = value;
        });
        return builderObject;
    };

    const color = (value: string, tokenTypes: string[]) =>
        apply('color', value, tokenTypes);
    const bgColor = (value: string, tokenTypes: string[]) =>
        apply('backgroundColor', value, tokenTypes);
    const fontWeight = (value: string, tokenTypes: string[]) =>
        apply('fontWeight', value, tokenTypes);
    const fontStyle = (value: string, tokenTypes: string[]) =>
        apply('fontStyle', value, tokenTypes);

    const build = () => theme;
    const builderObject = {
        lineNumbers,
        invalid,
        apply,
        color,
        bgColor,
        fontWeight,
        fontStyle,
        build,
    };
    return builderObject;
}
