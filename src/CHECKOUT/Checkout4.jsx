import MidNav from "../LAYOUT/MidNav";
import cart from "../assets/cart.jpg"
import { FaRegMap } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import { MdPayment } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import visa1 from "../assets/visa1.png"
import visa2 from "../assets/visa2.png"
import visa3 from "../assets/visa3.png"
import visa4 from "../assets/visa4.png"
import visa5 from "../assets/visa5.png"
import visa6 from "../assets/visa6.png"
import ArrowTop from "../LAYOUT/ArrowTop";
import Footer1 from "../LAYOUT/Footer";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Checkout4Dynamic from "./Checkout4Dynamic";
export default function Checkout4() {
    const check4 = [
        { id: 1, title1: "Product", title2: "Total" },
        { id: 2, title1: "Product img", title2: "$214.20" },
        { id: 3, title1: "Subtotal", title2: "$214.20" },
        { id: 4, title1: "Tax", title2: "$0.00" },
        { id: 5, title1: "Total Sgipping", title2: "$25.00" },
        { id: 6, title1: "Total", title2: "$239.20" },
    ]
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

<div className="container mx-auto lg:px-10 grid lg:grid-cols-2 grid-cols-1 py-6">
    <div className="">
    <h5 className="lg:ml-8 font-bold py-4">Select a payment option :</h5>
    <div className="flex ">
    <LazyLoadImage src={visa1} alt="" />  <LazyLoadImage src={visa2} alt="" />
    <LazyLoadImage src={visa3} alt="" /> <LazyLoadImage src={visa4} alt="" />
    <LazyLoadImage src={visa5} alt="" /> <LazyLoadImage src={visa6} alt="" />
    </div>
    </div>
<div className="py-4 font-medium">
<h5 className="lg:ml-40 ml-32 lg:py-4 ">Summary </h5>
        {check4.map((ch4) => {
      return <Checkout4Dynamic checkout4={ch4} />
     })}
     <form action="">
     <div className="grid lg:grid-cols-2 grid-cols-2 py-4">
     <input type="text" placeholder="Have coupon code? Enter here.." required/><span className="bg-black text-white p-2 rounded-md w-20"><input type="submit" required/></span>
     </div>
     </form>
</div>
</div>
      <div className="container mx-auto lg:px-60 lg:pt-8 grid grid-cols-2 pb-8">
        <h5 ><Link to="/checkout3" className="flex items-center gap-2 font-bold text-lg"> <FaArrowLeftLong /> <span> Return to Dleviry</span> </Link></h5>
        <button className="hover:scale-105 duration-200 "> <Link to="/checkout5" className="bg-black text-white font-bold p-4 border-4 border-blue-600 rounded-tl-2xl rounded-br-2xl hover:bg-blue-600 hover:border-black text-sm">Complete order</Link> </button>
    </div>
      <Footer1/>
      <ArrowTop/>

    </>
  )
}