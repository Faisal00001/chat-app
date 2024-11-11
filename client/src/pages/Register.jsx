import { useDispatch, useSelector } from "react-redux";
import { clearRegisterInfo, registerUser, updateRegisterInfo } from "../features/register/registerSlice";
import { setUser } from "../features/user/userSlice";
import toast from "react-hot-toast";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useState } from "react";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const user = useSelector((state) => state
        .user)
    const registerInfo = useSelector((state) => state.register.registerInfo)
    const { loading: isRegistering, error } = useSelector((state) => state.register)
    const dispatch = useDispatch()
    const handleInputChange = (event) => {
        const { name, value } = event.target
        dispatch(updateRegisterInfo({
            ...registerInfo,
            [name]: value
        }))
    }
    const handleRegister = async (event) => {
        event.preventDefault();

        const action = await dispatch(registerUser());

        if (action.type === registerUser.fulfilled.type) {
            if (action.payload) {
                dispatch(setUser(action.payload));
                toast.success("User Registered Successfully");
                dispatch(clearRegisterInfo())
            }
        } else if (action.type === registerUser.rejected.type) {
            console.error('Registration failed:', action.error.message);
        }
    }
    return (
        <div>


            <form className="max-w-md mx-auto pt-20" onSubmit={handleRegister}>
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">Your name</label>
                    <input name="name" value={registerInfo.name} onChange={handleInputChange} type="text" className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 text-black" placeholder="Enter your name" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
                    <input name="email" value={registerInfo.email} onChange={handleInputChange} type="email" className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 text-black" placeholder="Enter your email" required />

                </div>
                <div className="mb-5 relative">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium">Your password</label>
                    <input name="password" value={registerInfo.password} onChange={handleInputChange} type={`${showPassword ? 'text' : 'password'}`} className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5  text-black" required />
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
                        isRegistering ? "Creating your account" : "Register"
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

            </form>


        </div>
    );
};

export default Register;