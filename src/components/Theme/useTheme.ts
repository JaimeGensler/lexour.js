import { useContext, CSSProperties } from 'react';
import ThemeContext from './ThemeContext';

export default function useTheme(
    tokenType: string,
    isLexourUtil = false,
): CSSProperties {
    const theme = useContext(ThemeContext);
    if (isLexourUtil) {
        return theme[tokenType];
    }

    let currentLookup = '';
    return tokenType.split('.').reduce((acc, val, i) => {
        currentLookup += `${i === 0 ? '' : '.'}${val}`;
        if (!(currentLookup in theme)) {
            return acc;
        }
        return { ...acc, ...theme[currentLookup] };
    }, {});
}
