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
import Register from './LOGIN & REGISTER/Register';
import ForgetPassword from './LOGIN & REGISTER/Forget';
import Wishlist from './LOGIN & REGISTER/WishList';
import { store } from './LOGIN & REGISTER/Store';
import { Provider } from 'react-redux';
import Checkout1 from './CHECKOUT/Checkout1';
import Checkout2 from './CHECKOUT/Checkout2';
import Checkout3 from './CHECKOUT/Checkout3';
import Checkout4 from './CHECKOUT/Checkout4';
import Checkout5 from './CHECKOUT/Checkout5';
import ShopDetails from './SHOP/ShopDetails';
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
   {
    path: "/register", 
    element:<Register/>
   },
   {
    path: "/forget", 
    element:<ForgetPassword/>
   },
   {
    path: "/wishlist", 
    element:<Wishlist/>
   },
   {
    path: "/checkout1", 
    element:<Checkout1/>
   },
   {
    path: "/checkout2", 
    element:<Checkout2/>
   },
   {
    path: "/checkout3", 
    element:<Checkout3/>
   },
   {
    path: "/checkout4", 
    element:<Checkout4/>
   },
   {
    path: "/checkout5", 
    element:<Checkout5/>
   },
   {
    path:"/shopdetails/:id",
    element:<ShopDetails/>
  },
  






 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
<RouterProvider router={routers}/> 
</Provider>
  </StrictMode>,
)
