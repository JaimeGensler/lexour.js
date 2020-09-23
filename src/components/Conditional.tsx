import React, { ReactNode, ReactNodeArray } from 'react';

type Props = {
    shouldRender: boolean;
    children?: ReactNode | ReactNodeArray;
};
export default function Conditional({ shouldRender, children }: Props) {
    if (!shouldRender) return null;
    return <>{children}</>;
}
