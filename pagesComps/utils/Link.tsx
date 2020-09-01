import Link from 'next/link';
import type { ReactNode, ReactNodeArray } from 'react';

type Props = {
    href: string;
    title?: string;
    children?: ReactNode | ReactNodeArray;
};

const style =
    'text-blue-600 font-bold hover:underline focus:underline visited:text-indigo-700';

export function ExLink({ href, title, children }: Props) {
    return (
        <a href={href} title={title} className={style}>
            {children}
        </a>
    );
}

export function InLink({ href, title, children }: Props) {
    return (
        <Link href={href} passHref>
            <a title={title} className={style}>
                {children}
            </a>
        </Link>
    );
}
