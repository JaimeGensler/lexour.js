import type { ReactNode, ReactNodeArray } from 'react';

type Props = {
    children?: ReactNode | ReactNodeArray;
};
export function LI({ children }: Props) {
    return <li>{children}</li>;
}
export function UL({ children }: Props) {
    return <ul className="list-disc pl-8 space-y-1 mt-1 mb-2">{children}</ul>;
}

export function NestedUL({ children }: Props) {
    return (
        <ul className="list-square pl-6 space-y-1 mt-px mb-1">{children}</ul>
    );
}
