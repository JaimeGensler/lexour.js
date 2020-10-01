import type { CSSProperties } from 'react';
import type { Theme } from '../types';

export default function buildTheme(blockStyles: CSSProperties) {
    const theme: Theme = {
        'lexour.block': blockStyles,
    };
    const applyObject = (key: string, value: object) => {
        theme[`lexour.${key}`] = value;
        return builderObject;
    };
    const invalid = (obj: CSSProperties) => applyObject('invalid', obj);
    const lineNumbers = (obj: CSSProperties) => applyObject('lineNumbers', obj);

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
