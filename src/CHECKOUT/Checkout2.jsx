import MidNav from "../LAYOUT/MidNav";
import { motion } from "framer-motion";
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

export default function Checkout2() {
  return (
    <>
      <MidNav />
              <motion.div className="relative pt-32" initial={{ x: '-150%' }} animate={{ x: 0 }}
      transition={{ duration: 1, ease: 'easeOut'  }} >
        <LazyLoadImage src={cart} alt="" className="w-full h-[15rem] "/>
        <div className="text-white">
  <h5 className="absolute left-0 top-0 flex flex-col text-4xl bg-black bg-opacity-30 w-full lg:px-[35rem] px-[7rem] py-[5.6rem]  font-bold text-center pt-[210px]"> Checkout2<span className="text-sm font-semibold mt-2">
          <Link to="/">HOME</Link>  - CHECKOUT2</span></h5>
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
      <div className="flex flex-col items-center gap-2 font-medium ">
      <h5> <FiTruck /> </h5>
                <h5 className='flex gap-2'>3- Delivery info <span className='flex items-center '> <MdNavigateNext /></span></h5>
      </div>
      <div className="flex flex-col items-center gap-2 font-medium ">
      <h5> <MdPayment /> </h5>
                <h5 className='flex gap-2'>4- Payment <span className='flex items-center '> <MdNavigateNext /></span></h5>
      </div>
      </div>
      <div className=" lg:px-96 grid lg:grid-cols-2 grid-cols-1 gap-6 leading-8 ">

        <div className=" shadow-xl p-6 ">
            <input type="radio" /> <span className="text-gray-500">Adress :</span> <span>6 st october cairo giza</span>
            <h5 className="text-gray-500">Postal code :</h5>
            
            <h5 className="text-gray-500">City : <span className="text-black">Ataba</span></h5>
            <h5 className="text-gray-500">State : <span className="text-black">Cairo</span></h5>
            <h5 className="text-gray-500">Country : <span className="text-black">Egypt</span></h5>
            <h5 className="text-gray-500">Phone : <span className="text-black">02 01121816915</span></h5>

        </div>
{/* -------------------H----------- */}
      </div>
      <div className="container mx-auto lg:px-60 lg:pt-8 grid grid-cols-2 py-8 ">
        <h5 ><Link to="/checkout1" className="flex items-center gap-2 font-bold text-lg"> <FaArrowLeftLong /> <span> Return to my cart</span> </Link></h5>
        <button className="hover:scale-105 duration-200 "> <Link to="/checkout3" className="bg-black text-white font-bold p-4 border-4 border-blue-600 rounded-tl-2xl rounded-br-2xl hover:bg-blue-600 hover:border-black text-sm">Continue to Delivery </Link> </button>
    </div>


      <Footer1/>
      <ArrowTop/>
    </>
  )
}
