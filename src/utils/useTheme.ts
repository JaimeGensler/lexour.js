import { useContext, CSSProperties } from 'react';
import ThemeContext from '../components/Contexts/ThemeContext';

interface Acc {
    style?: CSSProperties;
    [other: string]: any;
}

export default function useTheme(tokenType: string): CSSProperties {
    const theme = useContext(ThemeContext);
    return (
        tokenType
            .replace(/__[A-Za-z1-9]+?$/, '')
            .split('.')
            .reduce(
                (acc: Acc, nested) => acc[nested as keyof typeof acc] ?? acc,
                theme,
            ).style ?? {}
    );
}
