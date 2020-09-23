import React, { useMemo } from 'react';

import languages from './languages';
import themes from './themes';
import tokenizeString from './lexer';
import Line from './components/Line';
import ThemeContext from './components/Theme/ThemeContext';
import type { Lang, ThemeProp } from './types';

type Props = {
    code: string;
    lang: Lang;

    theme?: ThemeProp;
    firstLine?: number;
    showLineNumbers?: boolean;
};

const styles: React.CSSProperties = {
    display: 'table',
};

export default function CodeBlock({
    code,
    lang,

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
        <pre style={{ margin: 0, ...themeObject.DEFAULT }}>
            <div style={{ display: 'table', width: '100%' }}>
                <ThemeContext.Provider value={themeObject}>
                    {lineComps}
                </ThemeContext.Provider>
            </div>
        </pre>
    );
}
