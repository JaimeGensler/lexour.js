import { useContext, CSSProperties } from 'react';
import ThemeContext from './ThemeContext';

interface Acc {
    style?: CSSProperties;
    [other: string]: any;
}

// This is temporary - the shape of Theme will be entirely redone

export default function useTheme(tokenType: string): CSSProperties {
    const theme = useContext(ThemeContext);
    return (
        tokenType
            .replace(/__[A-Za-z1-9]+?$/, '')
            .split('.')
            .reduce(
                (acc: Acc, nested: keyof typeof acc) => acc[nested] ?? acc,
                theme,
            ).style ?? {}
    );
}
