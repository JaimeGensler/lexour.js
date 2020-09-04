import Link from 'next/link';
type Props = {
    title: string;
    pageURL: string;
    // this goes unused
    subItems: any[];
};
export default function LandingNavItem({ title, pageURL }: Props) {
    return (
        <li className="pr-1">
            <Link href={pageURL}>
                <a className="font-medium transition-border duration-100 text-xl block py-2 pr-12 mr-12 border-r border-gray-800 hover:border-r-4 focus:border-r-4 hover:font-bold focus:font-bold">
                    {title}
                </a>
            </Link>
        </li>
    );
}
