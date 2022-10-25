import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/courses'
            },
            {
                path : '/faq'
            },
            {
                path : '/blog',
                element : <Blog></Blog>
            }
        ]
    }
]) 