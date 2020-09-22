import { buildLexer, comment, remainder } from '../lexer';

export default buildLexer('MAIN')
    .addState(
        'MAIN',
        comment('//'),
        comment(/\*/, /\*/, true),
        remainder('text'),
    )
    .build();
