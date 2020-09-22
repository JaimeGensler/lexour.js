import type { CSSProperties } from 'react';
import type { Lexer } from './lexer/builders/lexer';

// === Theme Types ===
export type BuiltInTheme = 'oneDarkPro';
export interface Theme {
    DEFAULT: CSSProperties;
    LINE_NUMBER: CSSProperties;
    [tokenName: string]: CSSProperties;
}
export type ThemeProp = BuiltInTheme | Theme;

// === Language Types ===
// 'javascript' | 'js' | 'typescript'  | 'ts' | 'jsx' | 'tsx'*/;
export type BuiltInLang = 'html' | 'terminal';
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

// === Lexer Types ===
export interface Token {
    type: string;
    value: string;
}
export type TokenResolver =
    | string
    | ((value: string, actions: any) => string)
    | ((value: string, actions: any) => Token);
