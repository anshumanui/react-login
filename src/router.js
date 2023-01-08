// Library Imports
import { createBrowserRouter } from 'react-router-dom';

// Components Import
import LoginPage from './models/LoginPage';
import Dashboard from './components/Dashboard';
import SignUpPage from './models/SignUpPage';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import ErrorPage from './components/ErrorPage';

// Router declaration
const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
        errorElement: <ErrorPage />
    }, {
        path: "/dashboard",
        element: <Dashboard />,
    }, {
        path: "/signup",
        element: <SignUpPage />,
    }, {
        path: "/forgot-password",
        element: <ForgotPassword />,
    }, {
        path: "/reset-password",
        element: <ResetPassword />,
    }
]);

export default router;