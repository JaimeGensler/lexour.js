const conduct =
    'https://github.com/JaimeGensler/lexour.js/blob/main/CODE_OF_CONDUCT.md';

export default function Conduct() {
    return (
        <div className="mt-2 bg-gray-800 px-6 py-4 rounded-lg shadow-lg">
            <p className="text-gray-300 text-base">
                All issues and pull requests must follow the Code of Conduct.
                Contributions in violation of this code will be removed without
                further review.
            </p>
            <p className="text-gray-300 text-base">
                <a className="underline" href={conduct}>
                    Read the Code of Conduct
                </a>{' '}
                in its entirety before creating issues or pull requests.
            </p>
        </div>
    );
}
