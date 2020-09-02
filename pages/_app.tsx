import Head from 'next/head';
import type { AppProps } from 'next/app';
import '../tailwind.css';
import DocsLayout from '../pagesComps/DocsLayout';
import getPageTitle from '../pagesComps/utils/getPageTitle';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
    const { pathname } = useRouter();
    const pageTitle = getPageTitle(pathname);
    const isHome = pathname === '/';

    const page = (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"
                    rel="stylesheet"
                />
                <title>{pageTitle}</title>
            </Head>
            <Component {...pageProps} />
        </>
    );

    return isHome ? page : <DocsLayout>{page}</DocsLayout>;
}
