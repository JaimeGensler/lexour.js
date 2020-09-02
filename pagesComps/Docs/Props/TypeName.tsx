import type { ReactNode, ReactNodeArray } from 'react';

type Props = {
    children: ReactNode | ReactNodeArray;
};
export default function TypeName({ children }: Props) {
    return <code className="text-yellow-600">{children}</code>;
}
