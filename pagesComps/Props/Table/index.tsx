import Row from './Row';
import propsList from './propsList';

export default function PropsTable() {
    const rows = propsList.map(prop => <Row {...prop} key={prop.name} />);

    return (
        <table className="table-auto text-base">
            <thead>
                <tr className="bg-gray-300 text-gray-800">
                    <th className="px-4 py-2 border text-center font-bold">
                        Required?
                    </th>
                    <th className="px-4 py-2 border text-center font-bold">
                        Name
                    </th>
                    <th className="px-4 py-2 border text-center font-bold">
                        Type
                    </th>
                    <th className="px-4 py-2 border text-center font-bold">
                        Default Value
                    </th>
                    <th className="px-4 py-2 border text-center font-bold">
                        Description
                    </th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}
