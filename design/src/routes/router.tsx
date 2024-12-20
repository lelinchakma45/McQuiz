import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <MainLayout>
                <App />
            </MainLayout>
        ),
        children: [
            { path: '/', element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/contact', element: <Contact /> },
        ],
    },
]);

export default router;