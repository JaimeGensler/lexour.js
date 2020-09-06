import Link from 'next/link';
type Props = {
    title: string;
    pageURL: string;
    // subItems is typed lazily because it's unused in this section
    subItems: any;
};

export default function LandingNavItem({ title, pageURL }: Props) {
    return (
        <li>
            <Link href={pageURL}>
                <a className="block text-xl py-2 text-center md:text-left border-b md:border-b-0 font-medium transition-border duration-100 border-gray-400 md:border-gray-800 md:mr-12 md:border-r md:hover:border-r-4 md:focus:border-r-4 md:hover:font-bold md:focus:font-bold">
                    {title}
                </a>
            </Link>
        </li>
    );
}
