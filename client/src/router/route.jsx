import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/main";
import Chat from "../pages/Chat";
import Login from "../pages/Login";
import Register from "../pages/Register";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Chat></Chat>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
]);
export default router;