type Props = { typeName: string; values: string[] };
export default function TypeExplanation({ typeName, values }: Props) {
    const valuesList = values.map(value => (
        <li key={value}>
            <code>{value}</code>
        </li>
    ));
    return (
        <div>
            <p>
                The <code className="text-yellow-600">{typeName}</code> type
                currently has possible values of:
            </p>
            <ul className="list-disc pl-8 space-y-1">{valuesList}</ul>
        </div>
    );
}
