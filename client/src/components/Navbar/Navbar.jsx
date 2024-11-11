import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../features/user/userSlice";



const Navbar = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state
        .user)
    console.log('Nav ', user)
    const handleLogout = () => {
        dispatch(logout())
    }
    return (
        <div className="h-20 bg-black py-2 mb-5">
            <div className="container mx-auto">
                <div className="flex justify-evenly items-center mt-2">
                    <div>
                        <Link to={'/'}>
                            <h2 className="text-4xl">Chat App</h2>
                        </Link>
                    </div>
                    <div>
                        {
                            user?.user ? <h3 className="text-warning">Logged in as {user?.user?.name}</h3> : ""
                        }

                    </div>
                    {
                        user?.user ? (<button onClick={handleLogout} type="button">LogOut</button>) : <div>
                            <ul className="flex gap-5">
                                <li>
                                    <Link to={'/login'}>Login</Link>
                                </li>
                                <li>
                                    <Link to={'/register'}>Register</Link>
                                </li>
                            </ul>
                        </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;