import React, { useMemo } from 'react';

import type { Lang, ThemeProp } from './types';
import lexers from './lexers';
import themes from './themes';
import Code from './components/Code';
import getCodeLines from './utils/getCodeLines';
import LexerContext from './components/Contexts/LexerContext';
import ThemeContext from './components/Contexts/ThemeContext';

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
    const codeLines = useMemo(() => getCodeLines(code), [code]);
    const lexer = typeof lang === 'string' ? lexers[lang] : lang;
    const themeObject = typeof theme === 'string' ? themes[theme] : theme;

    return (
        <ThemeContext.Provider value={themeObject}>
            <LexerContext.Provider value={lexer}>
                <pre style={{ margin: 0, ...themeObject.DEFAULT, ...style }}>
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
