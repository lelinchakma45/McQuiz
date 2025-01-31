import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import DashBoardLayout from "../panels/layouts/DashBoardLayout";
import StudentDashboard from "../panels/student/dashboard/StudentDashboard";
import QuizzessDashboard from "../panels/student/quizzess/QuizzessDashboard";

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
    {
        path: 'student/',
        element: <DashBoardLayout />,
        children: [
            {
                index: true,
                element: <StudentDashboard />
            },
            {
                path: 'quizzess',
                element: <QuizzessDashboard />
            },
            // {
            //     path: 'quizzes',
            //     element: <DashboardQuizzes />
            // },
            // {
            //     path: 'leaderboard',
            //     element: <DashboardLeaderboard />
            // },
            // {
            //     path: 'settings',
            //     element: <DashboardSettings />
            // },
            // {
            //     path: 'profile',
            //     element: <DashboardProfile />
            // }
        ]
    }
]);

export default router;