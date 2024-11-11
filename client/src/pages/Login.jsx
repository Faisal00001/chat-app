import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearLoginInfo, updateLoginInfo, userLogin } from "../features/login/loginSlice";
import { setUser } from "../features/user/userSlice";
import toast from "react-hot-toast";

import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const loginInfo = useSelector((state) => state.login.loginInfo)
    const { loading: isLoginLoading, error } = useSelector((state) => state.login)
    const dispatch = useDispatch()
    const handleInputChange = (event) => {
        const { name, value } = event.target
        dispatch(updateLoginInfo({
            ...loginInfo,
            [name]: value
        }))
    }

    const handleLogin = async (event) => {
        event.preventDefault()
        const action = await dispatch(userLogin());
        if (action.type === userLogin.fulfilled.type) {
            if (action.payload) {
                dispatch(setUser(action.payload))
                toast.success("User Login Successfully");
                dispatch(clearLoginInfo())
                navigate("/")
            }
            else if (action.type === userLogin.rejected.type) {
                console.error('Login failed:', action.error.message);
            }
        }
    }
    return (
        <div>
            <form className="max-w-md mx-auto pt-20" onSubmit={handleLogin}>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
                    <input type="email" name="email" value={loginInfo.email} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5" placeholder="Enter your email" required />
                </div>
                <div className="mb-5 relative">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium">Your password</label>
                    <input type={`${showPassword ? 'text' : 'password'}`} name="password" value={loginInfo.password} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5" required />
                    {
                        showPassword ? <div className="absolute top-10 right-5 cursor-pointer">
                            <FaEye onClick={() => setShowPassword(false)} className="text-xl text-black" />:
                        </div> : <div className="absolute top-10 right-5 cursor-pointer ">
                            <FaEyeSlash onClick={() => setShowPassword(true)} className="text-xl text-black" />
                        </div>
                    }
                </div>


                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">
                    {
                        isLoginLoading ? "Login processing" : "Login"
                    }
                </button>
                {
                    error && <div role="alert" className="alert alert-error mt-5">
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
                        <span>{error}</span>
                    </div>
                }

                {/* <button onClick={() => {
                    navigate('/register')
                }} type="button" className="text-white mt-5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Don't have account? Please create an account</button> */}
            </form>
        </div>
    );
};

export default Login;