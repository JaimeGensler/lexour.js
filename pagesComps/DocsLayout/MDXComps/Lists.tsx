import type { ReactNode, ReactNodeArray } from 'react';

type Props = {
    children?: ReactNode | ReactNodeArray;
};
export function LI({ children }: Props) {
    return <li>{children}</li>;
}
export function UL({ children }: Props) {
    return <ul className="list-disc pl-8 space-y-1 my-1">{children}</ul>;
}
