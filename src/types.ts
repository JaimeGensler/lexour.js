import buildTheme from './themes/buildTheme';
import getStateManager from './lexer/managers/getStateManager';
import getVariableManager from './lexer/managers/getVariableManager';
import { CSSProperties } from 'react';

// === Theme Types ===
export type BuiltInTheme = 'oneDarkPro';
export interface Theme {
    'lexour.block': CSSProperties;
    [key: string]: CSSProperties;
}
export type ThemeProp = BuiltInTheme | Theme;

// === Language Types ===
export type BuiltInLang =
    | 'html'
    | 'terminal'
    | 'json'
    | 'css'
    | 'javascript'
    | 'js';
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
