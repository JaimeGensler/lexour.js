type Props = { typeName: string; values: string[] };
export default function TypeExplanation({ typeName, values }: Props) {
    const valuesList = values.map(value => (
        <li className="my-4 mx-6" key={value}>
            <code>{value}</code>
        </li>
    ));
    return (
        <div>
            <p>
                The <code className="text-yellow-600">{typeName}</code> type
                currently has possible values of:
            </p>
            <ul className="list-disc flex flex-wrap">{valuesList}</ul>
        </div>
    );
}
