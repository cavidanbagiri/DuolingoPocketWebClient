
import {
    createBrowserRouter,
} from "react-router-dom";

import Navbar from "../pages/Navbar";
import Dashboard from "../pages/Dashboard";
import Learned from "../pages/Learned";
import SavedWords from "../pages/SavedWords";
import Auth from "../pages/Auth";
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
                path: "/savedwords",
                element: <SavedWords/>
            },
            {
                path: "/learned",
                element: <Learned/>
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
