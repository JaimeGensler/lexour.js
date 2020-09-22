import React, { useMemo } from 'react';

import languages from './languages';
import themes from './themes';
import tokenizeString from './lexer/tokenizeString';
import Line from './components/Line';
import ThemeContext from './components/ThemeContext';
import type { Lang, ThemeProp } from './types';

type Props = {
    code: string;
    lang: Lang;

    style?: React.CSSProperties;
    theme?: ThemeProp;
    firstLine?: number;
    showLineNumbers?: boolean;
};

// Style and other HTML prop passing should probably be done differently
export default function CodeBlock({
    code,
    lang,

    style = {},
    theme = 'oneDarkPro',
    showLineNumbers = false,
    firstLine = 1,
}: Props) {
    const lexer = typeof lang === 'string' ? languages[lang] : lang;
    const themeObject = typeof theme === 'string' ? themes[theme] : theme;

    const cleaned = useMemo(() => code.replace(/(?:^\n)|(?:\n$)/g, ''), [code]);
    const tokenBlock = useMemo(
        () => tokenizeString(lexer, cleaned, firstLine),
        [lang, firstLine],
    );
    const lineComps = tokenBlock.map(([lineNumber, ...tokens], i) => (
        <Line
            lineNumber={lineNumber}
            showLineNumbers={showLineNumbers}
            tokens={tokens}
            key={i}
        />
    ));
    return (
        <pre style={{ margin: 0, ...themeObject.DEFAULT, ...style }}>
            <ThemeContext.Provider value={themeObject}>
                {lineComps}
            </ThemeContext.Provider>
        </pre>
    );
}
