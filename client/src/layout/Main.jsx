import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";


const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="container mx-auto">

                <Outlet></Outlet>
            </div>
        </>

    );
};

export default Main;