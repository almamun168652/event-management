import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Details from "../Pages/Details/Details";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";


const createdRoute = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/conference.json')
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ()=> fetch('/conference.json')
            }
        ]
    }
])


export default createdRoute;