import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";

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
        ],
    },
]);

export default router;