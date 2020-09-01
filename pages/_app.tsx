import Head from 'next/head';
import type { AppProps } from 'next/app';
import '../tailwind.css';
import DocsLayout from '../pagesComps/DocsLayout';
import getPageTitle from '../pagesComps/utils/getPageTitle';

export default function App({ Component, pageProps }: AppProps) {
    const pageTitle = getPageTitle(Component.name);
    const isHome = pageTitle === 'Home';

    const page = (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"
                    rel="stylesheet"
                />
                <title>lexour{isHome ? '' : ` - ${pageTitle}`}</title>
            </Head>
            <Component {...pageProps} />
        </>
    );

    return isHome ? page : <DocsLayout title={pageTitle}>{page}</DocsLayout>;
}
