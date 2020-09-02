import { Children } from 'react';
import Header from './Header';
import Section from './Section';

export default function wrapper({ children, ...props }: any) {
    const sectionedChildren = Children.toArray(children)
        .reduce((acc: any[][], child: any) => {
            const elemType = child.props.mdxType;

            if (/^h[1-6]$/.test(elemType)) {
                acc.push([child]);
            } else {
                acc[acc.length - 1].push(child);
            }
            return acc;
        }, [])
        .map((group, i) => {
            if (i === 0) {
                return <Header key={i}>{group}</Header>;
            }
            return <Section key={i}>{group}</Section>;
        });
    return <>{sectionedChildren}</>;
}
