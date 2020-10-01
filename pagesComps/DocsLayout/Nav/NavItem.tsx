import { useRouter } from 'next/router';
import NavSubItem from './NavSubItem';
import Link from 'next/link';
import Conditional from '../../utils/Conditional';

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

    const sublist = isCurrentPage
        ? subItems.map(item => <NavSubItem {...item} key={item.title} />)
        : null;

    const listStyle = isCurrentPage
        ? 'border-t border-b bg-gray-200 py-2'
        : 'border-r py-1';

    const boldStyle = isCurrentPage
        ? 'font-bold'
        : 'font-medium hover:font-bold focus:font-bold';

    return (
        <li className={`${listStyle} px-8`}>
            <Link href={isCurrentPage ? '#content-top' : pageURL}>
                <a
                    className={`group transition-all duration-200 block text-xl ${boldStyle}`}
                >
                    <span className="inline-block transform group-hover:translate-x-1 group-focus:translate-x-1 transition-transform duration-200">
                        {title}
                    </span>
                </a>
            </Link>
            <Conditional shouldRender={isCurrentPage}>
                <ol className="pl-2">{sublist}</ol>
            </Conditional>
        </li>
    );
}
