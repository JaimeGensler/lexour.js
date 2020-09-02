import Row from './Row';
import propsList from './propsList';

const headings = [
    'Required?',
    'Name',
    'Type',
    'Default Value',
    'Description',
].map(heading => (
    <th className="px-4 py-2 border text-center font-bold" key={heading}>
        {heading}
    </th>
));
const rows = propsList.map(prop => <Row {...prop} key={prop.name} />);

export default function PropsTable() {
    return (
        <table className="table-auto text-base">
            <thead>
                <tr className="bg-gray-300 text-gray-800">{headings}</tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}
