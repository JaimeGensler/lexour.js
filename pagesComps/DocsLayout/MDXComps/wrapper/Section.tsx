import type { ReactNode, ReactNodeArray } from 'react';

type Props = {
    children: ReactNodeArray;
};

export default function Section({ children }: Props) {
    const [title, ...content] = children;

    return (
        <section className="border-t border-gray-400 mt-4 pt-1">
            {title}
            <div className="px-4">{content}</div>
        </section>
    );
}
