import LexourIcon from '../utils/LexourIcon';
export default function Splash() {
    return (
        <div className="w-full h-screen bg-gray-900 flex items-center justify-center">
            <div className="-mt-6">
                <LexourIcon className="text-gray-600 h-64 mx-auto" />
                <h1 className="text-10xl font-raleway text-center text-gray-300 -mt-12">
                    lexour
                </h1>
                <p className="text-center text-gray-400 font-smallcaps">
                    A React component for your code snippets
                </p>
            </div>
        </div>
    );
}
