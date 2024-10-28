

const Login = () => {
    return (
        <div>
            <form className="max-w-md mx-auto pt-20">
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5" placeholder="Enter your email" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium">Your password</label>
                    <input type="password" id="email" className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5" required />
                </div>


                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Login</button>
                <div role="alert" className="alert alert-error mt-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 shrink-0 stroke-current"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>An error occured.</span>
                </div>
            </form>
        </div>
    );
};

export default Login;