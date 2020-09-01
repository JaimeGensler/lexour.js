import Nav from './Nav';
import Header from './Header';

type Props = {
    children: JSX.Element;
    title: string;
};

export default function DocsLayout({ children, title }: Props) {
    return (
        <div className="w-full h-screen">
            <Header />
            <div className="flex h-full pt-16">
                <Nav />
                <main className="flex-1 text-lg px-12 py-8 h-full overflow-y-auto">
                    <h1 className="font-bold text-3xl">{title}</h1>
                    {children}
                </main>
            </div>
        </div>
    );
}
