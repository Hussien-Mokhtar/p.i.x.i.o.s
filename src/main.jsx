import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import MainHome from './PAGES/MainHome';
import MainBlog from './BLOGS/MainBlog';
import 'react-lazy-load-image-component/src/effects/blur.css';
import MainContactUs from './CONTACT-US/MainContactUs';
import MainShop from './SHOP/MainShop';
import MainAboutUs from './ABOUT-US/MainAboutUs';
import Login from './LOGIN & REGISTER/Login';
const routers = createBrowserRouter ([
  {
   path: "/", 
   element:<MainHome/>
  },
  {
    path: "/blog", 
    element:<MainBlog/>
   },
   {
    path: "/contactus", 
    element:<MainContactUs/>
   },
   {
    path: "/shop", 
    element:<MainShop/>
   },
   {
    path: "/aboutus", 
    element:<MainAboutUs/>
   },
   {
    path: "/login", 
    element:<Login/>
   },




   
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={routers}/> 
  </StrictMode>,
)
