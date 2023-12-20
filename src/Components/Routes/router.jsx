import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../../App";
import Home from "../Home/Home";
import About from "../About/About";
import Resume from "../Resume/Resume";
import Portfolio from "../Portfolio/Portfolio";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";


  const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/home',
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/resume',
                element:<Resume/>
            },
            {
                path:'/portfolio',
                element:<Portfolio/>
            },
            {
                path:'/blog',
                element:<Blog/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
        ]
    }
  ])

  export default router