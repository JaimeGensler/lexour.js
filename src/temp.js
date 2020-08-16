import React from 'react';
import ReactDOM from 'react-dom';
import CodeBlock from './index.tsx';

const code = `
const generalKenobi /*@ MARK \u2022 AS constant @*/ 'hello there';
//@ NEXT LINE 100
const generalKenobi = 'hello there';

//hemmo
const jaime = 'gensler';
`;
const App = () => {
    return (
        <>
            <h1></h1>
            <div style={{ fontSize: '20px' }}>
                <CodeBlock lang="js" code={code} showLineNumbers />
            </div>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
