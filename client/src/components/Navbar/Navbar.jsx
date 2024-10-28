import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="h-20 bg-black py-2 mb-5">
            <div className="container mx-auto">
                <div className="flex justify-between items-center mt-2">
                    <div>
                        <Link to={'/'}>
                            <h2 className="text-4xl">Chat App</h2>
                        </Link>
                    </div>
                    <div>
                        <h3 className="text-warning">Logged in as Faisal</h3>
                    </div>
                    <div>
                        <ul className="flex gap-5">
                            <li>
                                <Link to={'/login'}>Login</Link>
                            </li>
                            <li>
                                <Link to={'/register'}>Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;