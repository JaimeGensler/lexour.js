import type { CSSProperties } from 'react';
import getStateManager from './lexer/managers/getStateManager';
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
export type BuiltInLang = 'html' | 'terminal' | 'json' | 'css';
export type Lang = BuiltInLang | Lexer;

// === Lexer Types ===
export interface LexerStateRules {
    readonly hasRemainderHandler: boolean;
    readonly search: RegExp;
    readonly tokenResolvers: TokenResolver[];
}
export interface Lexer {
    readonly defaultState: string;
    readonly states: Record<string, LexerStateRules>;
}

export interface Token {
    type: string;
    value: string;
}

type StateManagerActions = Omit<ReturnType<typeof getStateManager>, 'getState'>;
type VariableManagerActions = ReturnType<typeof getVariableManager>;
interface ResolverActions extends StateManagerActions, VariableManagerActions {}

export type TokenResolver =
    | string
    | ((match: string, actions: ResolverActions) => string | Token | Token[]);

export enum RuleType {
    COMMON = 'COMMON',
    REMAINDER = 'REMAINDER',
}
export interface Rule {
    readonly ruleType: RuleType;
    readonly tokenResolver: TokenResolver;
    readonly search?: string;
}
export type Matcher = string | RegExp;
