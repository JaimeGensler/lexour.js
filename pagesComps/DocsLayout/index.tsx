import { MDXProvider } from '@mdx-js/react';
import MDXComps from './MDXComps';
import Nav from './Nav';
import PageHeader from './PageHeader';

type Props = { children: JSX.Element };
export default function DocsLayout({ children }: Props) {
    return (
        <div className="w-full h-screen">
            <PageHeader />
            <div className="flex h-full pt-16">
                <Nav />
                <main
                    className="flex-1 text-lg px-12 py-8 h-full overflow-y-auto"
                    id="content"
                >
                    <MDXProvider components={MDXComps}>{children}</MDXProvider>
                </main>
            </div>
        </div>
    );
}
