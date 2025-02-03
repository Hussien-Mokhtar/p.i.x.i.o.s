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
import Footer1 from "../LAYOUT/Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
export default function Checkout3() {
  return (
    <>
      <MidNav />
      <motion.div className="relative pt-32" initial={{ x: '-150%' }} animate={{ x: 0 }}
      transition={{ duration: 1, ease: 'easeOut'  }} >
        <LazyLoadImage src={cart} alt="" className="w-full h-[15rem] "/>
        <div className="text-white">
  <h5 className="absolute left-0 top-0 flex flex-col text-4xl bg-black bg-opacity-30 w-full lg:px-[35rem] px-[7rem] py-[5.6rem]  font-bold text-center pt-[210px]"> Checkout3<span className="text-sm font-semibold mt-2">
          <Link to="/">HOME</Link>  - CHECKOUT3</span></h5>
        </div>
      </motion.div>

      <div className="container mx-auto lg:px-40 grid lg:grid-cols-4 py-10">
        
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
      <div className="flex flex-col items-center gap-2 font-medium ">
      <h5> <MdPayment /> </h5>
                <h5 className='flex gap-2'>4- Payment <span className='flex items-center '> <MdNavigateNext /></span></h5>
      </div>
      </div>

      <div className="container mx-auto lg:px-80 grid grid-cols-1 py-8">
        <div className="py-8 font-bold">
            <h5> <Link to="/products">Products</Link></h5>
        </div>
        <div className="container mx-auto lg:px-44 grid grid-cols-2 border-2 py-6 font-bold gap-2">
        <h5 className="lg:ml-[-10rem]">Choose Delivery Type</h5>
        <h5 className="border-2 py-2 lg:w-44 text-center"><input type="radio" /> <Link to="/">Home Delivery</Link> </h5>
        </div>
      </div>

      <div className="container mx-auto lg:px-60 lg:pt-8 grid grid-cols-2 pb-8">
        <h5 ><Link to="/checkout2" className="flex items-center gap-2 font-bold lg:text-lg text-sm"> <FaArrowLeftLong /> <span> Return to my Shipping</span> </Link></h5>
        <button className="hover:scale-105 duration-200 "> <Link to="/checkout4" className="bg-black text-white font-bold p-4 border-4 border-blue-600 rounded-tl-2xl rounded-br-2xl hover:bg-blue-600 hover:border-black text-sm">Continue to Payment</Link> </button>
    </div>

      <Footer1/>
      <ArrowTop/>

    </>
  )
}
