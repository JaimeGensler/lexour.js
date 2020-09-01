import Lexour from '../../src';
import type { BuiltInLang } from '../../src/types';

type Props = {
    lang: BuiltInLang;
    code: string;
    showLineNumbers?: boolean;
    firstLine?: number;
};
export default function CodeBlock(props: Props) {
    return <Lexour style={{ padding: '0.25rem' }} {...props} />;
}
