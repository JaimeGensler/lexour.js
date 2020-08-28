import GithubIcon from '../util/GithubIcon';

export default function Github() {
    return (
        <div className="fixed top-0 right-0 mx-4 my-2">
            <a
                className="group flex rounded-full px-4 py-1 items-center space-x-3 text-gray-600 hover:text-gray-200 hover:bg-gray-900 focus:text-gray-200 focus:bg-gray-900 transition-colors duration-300"
                href="https://www.github.com/JaimeGensler/lexour.js"
            >
                <span className="transform transition-github duration-300 translate-x-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-focus:opacity-100 group-focus:translate-x-0">
                    View on Github
                </span>
                <GithubIcon className="h-8 w-8 fill-current" />
            </a>
        </div>
    );
}
