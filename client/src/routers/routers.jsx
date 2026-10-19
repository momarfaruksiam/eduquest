import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Layout from '../layouts/Layout'

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
                path: '*',
                element: <>Page not found 404</>
            }
        ]
    }
])

export default routers