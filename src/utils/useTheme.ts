import { useContext, CSSProperties } from 'react';
import ThemeContext from '../components/Contexts/ThemeContext';

type Token = {
    style: CSSProperties;
    [other: string]: any;
};

// Slight tweaking needed
export default function useTheme(tokenType: string): CSSProperties {
    const theme = useContext(ThemeContext);
    return tokenType
        .replace(/__[A-Za-z1-9]+?$/, '')
        .split('.')
        .reduce(
            (acc: Token, subToken) => acc[subToken as keyof typeof acc] ?? acc,
            theme,
        ).style;
}
