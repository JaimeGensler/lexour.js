import React, { useMemo } from 'react';
import languages from '../languages';
import themes from '../themes';
import tokenizeString from '../lexer';
import Line from './Line';
import ThemeContext from './Theme/ThemeContext';
import type { Lang, ThemeProp } from '../types';
import getSpacedLineNumber from './getSpacedLineNumber';

type Props = {
    code: string;
    lang: Lang;
    theme?: ThemeProp;
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
    const lexer = typeof lang === 'string' ? languages[lang] : lang;
    const themeObject = typeof theme === 'string' ? themes[theme] : theme;

    const cleaned = useMemo(() => code.replace(/(?:^\n)|(?:\n$)/g, ''), [code]);
    const { block, largestLineNumber } = useMemo(
        () => tokenizeString(lexer, cleaned, firstLine),
        [lang, firstLine],
    );
    const lineComps = block.map(([lineNumber, ...tokens], i) => (
        <Line
            lineNumber={getSpacedLineNumber(lineNumber, largestLineNumber)}
            showLineNumbers={showLineNumbers}
            tokens={tokens}
            key={i}
        />
    ));
    return (
        <pre
            style={{
                ...themeObject['lexour.block'],
                // Temp
                overflowX: 'auto',
                overflowY: 'auto',
                height: '100%',

                // Not temp
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <ThemeContext.Provider value={themeObject}>
                {lineComps}
            </ThemeContext.Provider>
        </pre>
    );
}
