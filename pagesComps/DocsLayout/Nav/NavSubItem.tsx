import Link from 'next/link';

type Props = {
    title: string;
    id: string;
};

export default function NavSubItem({ title, id }: Props) {
    return (
        <li>
            <h3 className="pl-12 text-sm hover:bg-gray-300">
                <Link href={`#${id}`}>
                    <a>{title}</a>
                </Link>
            </h3>
        </li>
    );
}
