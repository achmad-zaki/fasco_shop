import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/home";
import LoginPage from "../pages/auth/login";
import RegisterPage from "../pages/auth/register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/register",
        element: <RegisterPage />
    }
])