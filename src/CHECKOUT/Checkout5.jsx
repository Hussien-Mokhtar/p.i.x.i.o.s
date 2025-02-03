import MidNav from "../LAYOUT/MidNav";
import cart from "../assets/cart.jpg"
import { FaRegMap } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import { MdPayment } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ArrowTop from "../LAYOUT/ArrowTop";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Footer1 from "../LAYOUT/Footer";
import { motion } from "framer-motion";
import Celebration from "./Celebration";
export default function Checkout5() {
  return (
    <>
      <MidNav />
      <motion.div className="relative pt-32" initial={{ x: '-150%' }} animate={{ x: 0 }}
      transition={{ duration: 1, ease: 'easeOut'  }} >
        <LazyLoadImage src={cart} alt="" className="w-full h-[15rem] "/>
        <div className="text-white">
  <h5 className="absolute left-0 top-0 flex flex-col text-4xl bg-black bg-opacity-30 w-full lg:px-[35rem] px-[7rem] py-[5.6rem]  font-bold text-center pt-[210px]"> Checkout4<span className="text-sm font-semibold mt-2">
          <Link to="/">HOME</Link>  - CHECKOUT4</span></h5>
        </div>
      </motion.div>

      <div className="container mx-auto lg:px-40 grid lg:grid-cols-4  py-10">
        
      <div className="flex flex-col items-center gap-2 font-medium text-blue-700 ">
      <h5> <MdOutlineShoppingCart /> </h5>
                <h5 className='flex gap-2'>1- My Cart <span className='flex items-center '> <MdNavigateNext /></span></h5>
      </div>
      <div className="flex flex-col items-center gap-2 font-medium text-blue-700">
      <h5> <FaRegMap /> </h5>
                <h5 className='flex gap-2'>2- Shipping info <span className='flex items-center '> <MdNavigateNext /></span></h5>
      </div>
      <div className="flex flex-col items-center gap-2 font-medium text-blue-700">
      <h5> <FiTruck /> </h5>
                <h5 className='flex gap-2'>3- Delivery info <span className='flex items-center '> <MdNavigateNext /></span></h5>
      </div>
      <div className="flex flex-col items-center gap-2 font-medium text-blue-700">
      <h5> <MdPayment /> </h5>
                <h5 className='flex gap-2'>4- Payment <span className='flex items-center '> <MdNavigateNext /></span></h5>
      </div>
      </div>

      <Celebration/>

      <div className="container mx-auto lg:px-80 lg:pt-8 grid grid-cols-1 pb-8">
        <h5 ><Link to="/shop" className="flex items-center justify-center gap-2 font-bold text-lg"> <FaArrowLeftLong /> <span> Return to Shop</span> </Link></h5>
        <button className="hover:scale-105 duration-200 "></button>
    </div>

      <Footer1/>
      <ArrowTop/>

    </>
  )
}