import Link from 'next/link';
type Props = {
    title: string;
    pageURL: string;
};

export default function LandingNavItem({ title, pageURL }: Props) {
    return (
        <li>
            <Link href={pageURL}>
                <a className="group block text-xl py-2 text-center md:text-left border-b md:border-b-0 font-medium transition-border duration-200 border-gray-400 md:border-gray-800 md:mr-8 md:border-r md:hover:border-r-4 md:focus:border-r-4 md:hover:font-bold md:focus:font-bold">
                    <span className="inline-block transform group-hover:translate-x-2 group-focus:translate-x-2 transition-transform duration-200">
                        {title}
                    </span>
                </a>
            </Link>
        </li>
    );
}
