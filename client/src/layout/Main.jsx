import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="container mx-auto">

                <Outlet></Outlet>
            </div>
            <Toaster />
        </>

    );
};

export default Main;