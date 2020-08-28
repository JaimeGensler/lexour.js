import PropsTable from './Table';

export default function PropsPageContent() {
    return (
        <div className="space-y-4">
            <h1 className="font-bold text-3xl">Props</h1>
            <p>
                lexour's <code>{'<CodeBlock />'}</code> component has a few
                custom props that may be passed.
            </p>
            <PropsTable />
            <p>
                The <code className="text-yellow-600">BuiltInLang</code> type
                currently has possible values of <code>"javascript"</code> (or{' '}
                <code>"js"</code>), <code>"typescript"</code> (or{' '}
                <code>"ts"</code>), <code>"jsx"</code>, <code>"tsx"</code>,{' '}
                <code>"html"</code>, <code>"css"</code>.{' '}
                <strong>
                    React syntax must be parsed as JSX or TSX - using JS or TS
                    as the lang will result in incorrectly tokenized code.
                </strong>
            </p>
            <p>
                The <code className="text-yellow-600">BuiltInTheme</code> type
                currently has possible values of <code>"oneDarkPro"</code>,{' '}
                <code>"githubLight"</code>.
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet, saepe nisi doloremque explicabo ullam ea itaque nostrum
                minus deleniti eos accusamus distinctio aspernatur sit. Delectus
                excepturi minima exercitationem atque ab? Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Eveniet, saepe nisi
                doloremque explicabo ullam ea itaque nostrum minus deleniti eos
                accusamus distinctio aspernatur sit. Delectus excepturi minima
                exercitationem atque ab? Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Eveniet, saepe nisi doloremque explicabo ullam
                ea itaque nostrum minus deleniti eos accusamus distinctio
                aspernatur sit. Delectus excepturi minima exercitationem atque
                ab? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet, saepe nisi doloremque explicabo ullam ea itaque nostrum
                minus deleniti eos accusamus distinctio aspernatur sit. Delectus
                excepturi minima exercitationem atque ab? Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Eveniet, saepe nisi
                doloremque explicabo ullam ea itaque nostrum minus deleniti eos
                accusamus distinctio aspernatur sit. Delectus excepturi minima
                exercitationem atque ab? Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Eveniet, saepe nisi doloremque explicabo ullam
                ea itaque nostrum minus deleniti eos accusamus distinctio
                aspernatur sit. Delectus excepturi minima exercitationem atque
                ab? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet, saepe nisi doloremque explicabo ullam ea itaque nostrum
                minus deleniti eos accusamus distinctio aspernatur sit. Delectus
                excepturi minima exercitationem atque ab? Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Eveniet, saepe nisi
                doloremque explicabo ullam ea itaque nostrum minus deleniti eos
                accusamus distinctio aspernatur sit. Delectus excepturi minima
                exercitationem atque ab? Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Eveniet, saepe nisi doloremque explicabo ullam
                ea itaque nostrum minus deleniti eos accusamus distinctio
                aspernatur sit. Delectus excepturi minima exercitationem atque
                ab? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet, saepe nisi doloremque explicabo ullam ea itaque nostrum
                minus deleniti eos accusamus distinctio aspernatur sit. Delectus
                excepturi minima exercitationem atque ab? Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Eveniet, saepe nisi
                doloremque explicabo ullam ea itaque nostrum minus deleniti eos
                accusamus distinctio aspernatur sit. Delectus excepturi minima
                exercitationem atque ab? Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Eveniet, saepe nisi doloremque explicabo ullam
                ea itaque nostrum minus deleniti eos accusamus distinctio
                aspernatur sit. Delectus excepturi minima exercitationem atque
                ab? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet, saepe nisi doloremque explicabo ullam ea itaque nostrum
                minus deleniti eos accusamus distinctio aspernatur sit. Delectus
                excepturi minima exercitationem atque ab? Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Eveniet, saepe nisi
                doloremque explicabo ullam ea itaque nostrum minus deleniti eos
                accusamus distinctio aspernatur sit. Delectus excepturi minima
                exercitationem atque ab? Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Eveniet, saepe nisi doloremque explicabo ullam
                ea itaque nostrum minus deleniti eos accusamus distinctio
                aspernatur sit. Delectus excepturi minima exercitationem atque
                ab? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet, saepe nisi doloremque explicabo ullam ea itaque nostrum
                minus deleniti eos accusamus distinctio aspernatur sit. Delectus
                excepturi minima exercitationem atque ab?
            </p>
        </div>
    );
}
