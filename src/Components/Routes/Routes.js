import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Courses from "../Courses/Courses";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Sidebar from "../Sidebar/Sidebar";
import Main from "./LayOut/Main";

export const routes = createBrowserRouter([
       {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/courses',
                element:<Courses></Courses>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }

        ]
       }
])