import type { CSSProperties } from 'react';
import type { Lexer } from './lexer/builders/buildLexer';
import getVariableManager from './lexer/managers/getVariableManager';

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
export type BuiltInLang = 'html' | 'terminal' | 'json';
export type Lang = BuiltInLang | Lexer;

// === Lexer Types ===
export interface Token {
    type: string;
    value: string;
}

export interface ResolverActions extends ReturnType<typeof getVariableManager> {
    // State Manager partial
    pushState: (newState: string) => number;
    popState: () => string;
}
export type TokenResolver =
    | string
    | ((value: string, actions: ResolverActions) => string | Token | Token[]);

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
