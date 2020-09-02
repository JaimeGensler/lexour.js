import type { ReactNode, ReactNodeArray } from 'react';

type Props = {
    children?: ReactNode | ReactNodeArray;
};
export function EM({ children }: Props) {
    return <em className="italic font-medium">{children}</em>;
}
