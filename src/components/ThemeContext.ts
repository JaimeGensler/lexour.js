import { createContext } from 'react';
import oneDarkPro from '../themes/oneDarkPro';
import type { Theme } from '../types';

export default createContext<Theme>(oneDarkPro);
