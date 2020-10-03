import type { BuiltInLang, Lexer } from '../types';

import html from './html';
import terminal from './terminal';
import json from './json';
import css from './css';
import { js } from './javascript';

const languages: Record<BuiltInLang, Lexer> = {
    html,
    terminal,
    json,
    css,
    javascript: js,
    js,
};

export default languages;
