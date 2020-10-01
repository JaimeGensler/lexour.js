import Link from 'next/link';

type Props = { title: string; id: string };

export default function NavSubItem({ title, id }: Props) {
    return (
        <li>
            <Link href={`#${id}`}>
                <a className="block text-sm hover:font-medium focus:font-medium transition-transform transform hover:translate-x-px focus:translate-x-1 duration-200">
                    {title}
                </a>
            </Link>
        </li>
    );
}
