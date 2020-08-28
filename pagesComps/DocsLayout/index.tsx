import Head from 'next/head';
import Nav from './Nav';
import Header from './Header';

export default function withDocsLayout(Page: () => JSX.Element, title: string) {
    return () => {
        return (
            <>
                <Head>
                    <title>{title}</title>
                </Head>
                <div className="w-full h-screen overflow-hidden">
                    <Header />
                    <div className="flex h-full">
                        <Nav />
                        <main className="flex-1 text-lg px-12 py-8 h-full overflow-y-scroll">
                            <Page />
                        </main>
                    </div>
                </div>
            </>
        );
    };
}
