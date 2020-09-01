import type { ReactNode, ReactNodeArray } from 'react';

type Props = {
    title: string;
    id: string;
    children?: ReactNode | ReactNodeArray;
};

export default function Section({ title, id, children }: Props) {
    return (
        <section>
            <h2 id={id} className="font-semibold text-2xl">
                {title}
            </h2>
            {children}
        </section>
    );
}
