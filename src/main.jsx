import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import MainHome from './PAGES/MainHome';
import Aoss from './LAYOUT/Aoss';
<Aoss/>
const routers = createBrowserRouter ([
  {
   path: "/", 
   element:<MainHome/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={routers}/> 
  </StrictMode>,
)
