import {createBrowserRouter} from 'react-router-dom';
// import RootLayout from '../components/RootLayout';
// import Post from '../components/post';
import Error from '../components/error'
import Index from '../pages/index';
// import {postLoader} from './postLoader'
import Register from '../pages/register';
import Login from '../pages/login';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Index/>,
        errorElement: <Error/>,
    },
    {
        path: '/login',
        element: <Login/>,
        errorElement: <Error/>,
    },
    {
        path: '/register',
        element: <Register/>,
        errorElement: <Error/>,
    }
])
