import PropsTable from './Table';
import TypeExplanation from './TypeExplanation';

export default function PropsPageContent() {
    return (
        <div className="space-y-4">
            <h1 className="font-bold text-3xl">Props</h1>
            <p>
                lexour's <code>{'<CodeBlock />'}</code> component has a few
                custom props that may be passed.
            </p>
            <PropsTable />
            <div>
                <TypeExplanation
                    typeName="BuiltInLang"
                    values={[
                        '"html"',
                        '"css"',
                        '"javascript"/"js"',
                        '"typescript"/"ts"',
                        '"jsx"',
                        '"tsx"',
                    ]}
                />
                <p>
                    <strong>React code must be passed in as JSX or TSX</strong>{' '}
                    - using JS or TS as the lang will result in incorrectly
                    tokenized code.
                </p>
            </div>
            <TypeExplanation
                typeName="BuiltInTheme"
                values={['"oneDarkPro"', '"githubLight"']}
            />
            <p>
                Lexour will handle a couple details of rendering for you - line
                numbers are not selectable text (on any browser), and are not
                added to the raw "code" input, so you can safely select and copy
                only the code, or add copy-on-click functionality, without line
                numbers affecting the result.
            </p>
        </div>
    );
}
