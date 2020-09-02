export default function Conduct() {
    return (
        <div className="bg-gray-800 px-6 pt-3 pb-4 rounded-lg shadow-lg w-4/5 ml-8">
            <h3 className="text-gray-200 font-bold text-lg">
                A note on conduct:
            </h3>
            <p className="text-gray-300 text-base">
                All issues and pull requests must follow the Code of Conduct.
                Contributions in violation of this code will be removed without
                further review.
            </p>
            <p className="text-gray-300 text-base">
                <a
                    className="underline"
                    href="https://github.com/JaimeGensler/lexour.js/blob/main/CODE_OF_CONDUCT.md"
                >
                    Read the Code of Conduct
                </a>{' '}
                in its entirety before creating issues or pull requests.
            </p>
        </div>
    );
}
