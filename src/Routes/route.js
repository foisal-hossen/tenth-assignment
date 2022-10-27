import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Components/Blog/Blog";
import CheckOut from "../../Components/CheckOut/CheckOut";
import Courses from "../../Components/Courses/Courses";
import Faq from "../../Components/Faq/Faq";
import FullCourseDetails from "../../Components/FullCourseDetails/FullCourseDetails";
import Home from "../../Components/Home/Home";
import Login from "../../Components/Login/Login";
import NotFound from "../../Components/NotFound/NotFound";
import Register from "../../Components/Register/Register";
import Main from "../../layouts/Main";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";


export  const  router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
               path:"/register",
               element:<Register></Register>
            },{
                path:"/login",
                element:<Login></Login>
            },{
                path:"/courses",
                element:<Courses></Courses>,
                loader:()=>fetch('https://learn-web-assignment-server.vercel.app/courses')
            },{
                path:"/courses/:id",
                element:<FullCourseDetails></FullCourseDetails>,
                loader:({params})=>fetch(`https://learn-web-assignment-server.vercel.app/courses/${params.id}`)
            },{
                path:"/checkout/:id",
                element:<PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
                loader:({params})=>fetch(`https://learn-web-assignment-server.vercel.app/courses/${params.id}`)
            },{
                path:"/blog",
                element:<Blog></Blog>

            },
            {
                   path:"/faq",
                   element:<Faq></Faq>
            },
              
            
            {
                path:"*",
                element:<NotFound></NotFound>

            }
        ]
    }
])