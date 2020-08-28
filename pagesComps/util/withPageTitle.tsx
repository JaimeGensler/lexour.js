import Head from 'next/head';

export default function withPageTitle(Page: () => JSX.Element, title: string) {
    return () => {
        return (
            <>
                <Head>
                    <title>{title}</title>
                </Head>
                <Page />
            </>
        );
    };
}
