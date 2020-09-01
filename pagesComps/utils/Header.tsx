import type { ReactNode, ReactNodeArray } from 'react';

type Props = {
    title: string;
    children?: ReactNode | ReactNodeArray;
};
export default function Header({ title, children }: Props) {
    return (
        <header>
            <h1 className="font-bold text-3xl">{title}</h1>
            {children}
        </header>
    );
}
