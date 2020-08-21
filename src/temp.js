import React from 'react';
import ReactDOM from 'react-dom';
import CodeBlock from './index.tsx';

const code = `
const generalKenobi /*@ MARK \u2022 AS constant @*/ 'hello there';
const generalKenobi = 'hello there';
const someNumber = 50;
"\\u2022"

//@ NEXT LINE 100
hello
test.split(' ');
split(' ')
`;
const App = () => {
    return (
        <>
            <h1>Lexour</h1>
            <div style={{ fontSize: '20px' }}>
                <CodeBlock lang="js" code={code} showLineNumbers />
            </div>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
