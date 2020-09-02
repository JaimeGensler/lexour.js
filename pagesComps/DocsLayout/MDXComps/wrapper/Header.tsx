import type { ReactNode, ReactNodeArray } from 'react';

type Props = {
    children: ReactNodeArray;
};
export default function Header({ children }: Props) {
    const [title, ...content] = children;

    return (
        <header id="content-top">
            {title}
            <div className="px-4">{content}</div>
        </header>
    );
}
