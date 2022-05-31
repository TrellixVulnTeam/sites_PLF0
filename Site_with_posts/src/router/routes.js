import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import Login from "../pages/Login";


export const privatRoutes = [
    {path:'/about', element:<About/>},
    {path:'/error', element:<Error/>},
    {path:'/posts', element:<Posts/>},
    {path:'/posts/:id', element:<PostIdPage/>},
]

export const publicRoutes =[
    {path:'/login', element:<Login/>},
]