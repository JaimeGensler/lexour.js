import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import type { DocumentContext } from 'next/document';

// Just want lang="en" out of this

export default class Document extends NextDocument {
    //@ts-ignore
    static async getInitialProps(ctx: DocumentContext) {
        //@ts-ignore
        const initialProps = await NextDocument.getInitialProps(ctx);
        return initialProps;
    }

    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
