import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Faq from "../components/FAQ/Faq";
import Main from "../Layout/Main";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";
import ErrorPage from "../components/Shared/ErrorPage/ErrorPage";
import HomePage from "../components/HomePage/HomePage";
import AllCourses from "../components/Courses/AllCourses";
import CategoryWiseCourse from "../components/Courses/CategoryWiseCourse";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/category',
                element : <AllCourses></AllCourses>,
                children : [
                    {
                        path : '/category/:id',
                        element : <CategoryWiseCourse></CategoryWiseCourse>,
                        loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
                    },
                    {
                        path : '/courses/:id',
                    }
                ]
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]) 