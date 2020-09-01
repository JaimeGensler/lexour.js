export default function PageHeader() {
    return (
        <header className="h-16 w-full flex items-center bg-gray-900 px-4 fixed">
            <h1 className="font-raleway text-gray-200 text-4xl">lexour</h1>
            <a className="p-1 text-gray-100 visible-on-focus" href="#content">
                Skip to main content
            </a>
        </header>
    );
}
