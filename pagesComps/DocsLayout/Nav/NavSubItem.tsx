type Props = {
    title: string;
    id: string;
};

export default function NavSubItem({ title, id }: Props) {
    return (
        <li>
            <h3 className="pl-12 text-sm hover:bg-gray-300">
                <a href={`#${id}`}>{title}</a>
            </h3>
        </li>
    );
}
