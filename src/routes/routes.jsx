import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Crypto from '../pages/Crypto';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/crypto',
                element: <Crypto />

            },
            {
                path: '/about',
                element: <h3>This is about page</h3>

            },
            {
                path: '/team',
                element: <h3>This is team page</h3>

            },
            {
                path: '/contact',
                element: <h3>This is contact page</h3>

            },
            {
                path: '/shop',
                element: <h3>This is shop page</h3>

            },
            {
                path: '/blog',
                element: <h3>This is blog page</h3>
            }
        ]
    }
])

export default routes;
