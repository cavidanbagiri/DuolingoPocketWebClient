
import {
    createBrowserRouter,
} from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Auth from "../pages/Auth";
import Navbar from "../pages/Navbar";
import Profile from "../pages/Profile";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar/>,
        children: [
            {
                path: "/",
                element: <Dashboard/>
            },
            {
                path: "/auth",
                element: <Auth/>
            },
            {
                path: "/profile",
                element: <Profile/>
            }
        ]
    },
]);

export default router;
