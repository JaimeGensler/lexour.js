import type { CSSProperties } from 'react';
import type { Lexer } from './lexer/builders/buildLexer';

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

// === Lexer Types ===
export interface StandardToken {
    type: string;
    value: string;
}
export interface NextLineToken {
    type: 'lexour.annotation.nextLine';
    value: number;
}
export type Token = StandardToken | NextLineToken;

export type TokenResolver =
    | string
    | ((value: string, actions: any) => string | Token);

export enum RuleType {
    COMMON = 'COMMON',
    REMAINDER = 'REMAINDER',
}
// This can probably be improved
export interface Rule {
    readonly ruleType: RuleType;
    readonly tokenResolver: TokenResolver;
    readonly search?: string;
}
export type Matcher = string | RegExp;
