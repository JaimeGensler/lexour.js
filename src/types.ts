import { Lexer } from 'moo';
import { CSSProperties } from 'react';

type BuiltInTheme = 'oneDarkPro' | 'githubLight';
export interface ThemeObject {
    DEFAULT: CSSProperties;
    LINE_NUMBER: CSSProperties;
    [tokenName: string]: CSSProperties;
}
export type Theme = BuiltInTheme | ThemeObject;

type BuiltInLang =
    | 'javascript'
    | 'js' /* | 'typescript' | 'ts' | 'jsx' | 'tsx'*/;
export type Lang = BuiltInLang | Lexer;

export enum AnnotationType {
    COMMENT = 'COMMENT',

    KEEP = 'KEEP',
    NEXT_LINE = 'NEXT_LINE',
    MARK_AS = 'MARK',
}

export interface LineTracker {
    getCurrent: () => number;
    advance: () => void;
    jumpTo: (nextLine: number) => void;
}
