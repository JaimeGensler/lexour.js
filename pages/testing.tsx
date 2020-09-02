import CodeBlock from '../src/';

const code = `
    <h1 class="text-blue-500" id='hey'>Hello,&nbsp;world!</h1>
`;

export default function Testing() {
    return <CodeBlock lang="html" code={code} />;
}
