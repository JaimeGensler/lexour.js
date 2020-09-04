import Link from 'next/link';

type Props = {
    title: string;
    id: string;
};

export default function NavSubItem({ title, id }: Props) {
    return (
        <li>
            <h3>
                <Link href={`#${id}`}>
                    <a className="block pl-12 text-sm hover:bg-indigo-200 focus:bg-indigo-200">
                        {title}
                    </a>
                </Link>
            </h3>
        </li>
    );
}
