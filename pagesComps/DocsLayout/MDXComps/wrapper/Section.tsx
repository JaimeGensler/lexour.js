import type { ReactNode, ReactNodeArray } from 'react';

type Props = {
    children: ReactNode | ReactNodeArray;
};

export default function Section({ children }: Props) {
    return (
        <section className="border-t border-gray-500 mt-6 pt-2 px-4">
            {children}
        </section>
    );
}
