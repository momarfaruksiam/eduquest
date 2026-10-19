import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Layout from '../layouts/Layout'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import ForgotPassword from '../pages/ForgotPassword'

const routers = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/sign-in',
                element: <SignIn />
            },
            {
                path: '/sign-up',
                element: <SignUp />
            },
            {
                path: '/forgot-password',
                element: <ForgotPassword />
            },
            {
                path: '*',
                element: <>Page not found 404</>
            }
        ]
    }
])

export default routers