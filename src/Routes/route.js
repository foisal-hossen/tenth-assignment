import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog";
import CheckOut from "../Components/CheckOut";
import Courses from "../Components/Courses";
import Faq from "../Components/Faq";
import FullCourseDetails from "../Components/FullCourseDetails";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Error from "../Components/ErrorHandle";
import Register from "../Components/Register";
import Main from "../Layouts/Main";
import PrivateRoutes from './PrivateRoute';


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
                loader:()=>fetch('https://assignment-ten-server-foisal-hossen.vercel.app/courses')
            },{
                path:"/courses/:id",
                element:<FullCourseDetails></FullCourseDetails>,
                loader:({params})=>fetch(`https://assignment-ten-server-foisal-hossen.vercel.app/courses/${params?.id}`)
            },{
                path:"/checkout/:id",
                element:<PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
                loader:({params})=>fetch(`https://assignment-ten-server-foisal-hossen.vercel.app/courses/${params?.id}`)
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
                element:<Error></Error>

            }
        ]
    }
])