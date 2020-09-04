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
                    className="flex-1 text-lg px-16 py-8 h-full overflow-y-auto"
                    id="content"
                >
                    <div className="max-w-6xl">
                        <MDXProvider components={MDXComps}>
                            {children}
                        </MDXProvider>
                    </div>
                </main>
            </div>
        </div>
    );
}
