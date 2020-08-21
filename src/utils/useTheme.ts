import { useContext, CSSProperties } from 'react';
import ThemeContext from '../components/Contexts/ThemeContext';

interface Acc {
    style?: CSSProperties;
    [other: string]: any;
}

// This has an unintended side effect:
// {
//     string: {
//         escape: {...}
//     }
//     escape: {...}
// }
// Given a token style structure like above, when trying to get styles for a
// token like string.escape, if the string object isn't found the first iteration,
// it'll still grab the unrelated escape token styles
// Tokens shouldn't ever have conflicting names, but you never know

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
