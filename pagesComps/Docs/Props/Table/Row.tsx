import TypeName from '../TypeName';

type Props = {
    required: boolean;
    name: string;
    type: string;
    defaultValue: string | null;
    description: string;
};

export default function Row({
    required = false,
    name,
    type,
    defaultValue,
    description,
}: Props) {
    return (
        <tr className="even:bg-gray-100">
            <td className="border px-2 py-1 text-center text-sm">
                <span
                    className={
                        required
                            ? 'text-green-700 font-bold'
                            : 'text-red-700 italic'
                    }
                >
                    {required ? 'Yes' : 'No'}
                </span>
            </td>
            <td className="border px-2 py-1">
                <code>{name}</code>
            </td>
            <td className="border px-2 py-1">
                <TypeName>{type}</TypeName>
            </td>
            <td className="border px-2 py-1 text-center">
                <code
                    className={
                        defaultValue === null ? 'text-gray-500 italic' : ''
                    }
                >
                    {defaultValue === null ? 'N/A' : defaultValue}
                </code>
            </td>
            <td className="border px-2 py-1">{description}</td>
        </tr>
    );
}
