import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    
    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-50 to-red-100 dark:from-gray-900 dark:to-gray-800 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-8 max-w-md text-center">
                <h1 className="text-5xl font-bold text-red-600 mb-4">Oops!!</h1>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Something went wrong!</h2>
                <h3 className="text-lg text-gray-600 dark:text-gray-300 mb-6"><span className="font-bold text-red-600">{err.status}</span> - {err.statusText}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">We apologize for the inconvenience. Please try again later.</p>
                <a href="/" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
                    Back to Home
                </a>
            </div>
        </div>
    )
}

export default Error;