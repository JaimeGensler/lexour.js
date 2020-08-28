import Head from 'next/head';
import type { AppProps } from 'next/app';
import '../tailwind.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
