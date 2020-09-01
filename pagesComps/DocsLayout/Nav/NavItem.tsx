import { useRouter } from 'next/router';
import NavSubItem from './NavSubItem';

interface SubItem {
    title: string;
    id: string;
}
type Props = {
    title: string;
    pageURL: string;
    subItems: SubItem[];
};

export default function NavItem({ title, pageURL, subItems }: Props) {
    const { pathname } = useRouter();
    const isCurrentPage = pathname === pageURL;

    const sublist = !isCurrentPage ? null : (
        <ol>
            {subItems.map(props => (
                <NavSubItem {...props} key={props.title} />
            ))}
        </ol>
    );

    const listStyle = isCurrentPage
        ? 'border-t border-b bg-gray-200'
        : 'border-r border-gray-300';

    return (
        <li className={listStyle}>
            <h2>
                <a
                    className="block px-8 py-1 font-bold hover:bg-gray-400"
                    href={pageURL}
                >
                    {title}
                </a>
            </h2>
            {sublist}
        </li>
    );
}
