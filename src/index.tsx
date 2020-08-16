import React, { useMemo } from 'react';

import { Lang, Theme } from './types';
import lexers from './lexers';
import themes from './themes';
import Code from './components/Code';
import getCodeLines from './utils/getCodeLines';
import LexerContext from './components/Contexts/LexerContext';
import ThemeContext from './components/Contexts/ThemeContext';

type Props = {
    code: string;
    lang: Lang;

    theme?: Theme;
    firstLine?: number;
    showLineNumbers?: boolean;
};

export default function CodeBlock({
    code,
    lang,
    theme = 'oneDarkPro',
    showLineNumbers = false,
    firstLine = 1,
}: Props) {
    const codeLines = useMemo(() => getCodeLines(code), [code]);
    const lexer = typeof lang === 'string' ? lexers[lang] : lang;
    const themeObject = typeof theme === 'string' ? themes[theme] : theme;

    return (
        <ThemeContext.Provider value={themeObject}>
            <LexerContext.Provider value={lexer}>
                <pre style={{ margin: 0, ...themeObject.default }}>
                    <Code
                        codeLines={codeLines}
                        firstLine={firstLine}
                        showLineNumbers={showLineNumbers}
                    />
                </pre>
            </LexerContext.Provider>
        </ThemeContext.Provider>
    );
}
