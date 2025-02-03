import { Link } from "react-router-dom"
import log from "../assets/log.png"
import MidNav from "../LAYOUT/MidNav"
import { motion } from "framer-motion"
import {  Card, Checkbox, Label, TextInput } from "flowbite-react";
import ArrowTop from "../LAYOUT/ArrowTop"
import cart from "../assets/cart.jpg"
import Footer1 from "../LAYOUT/Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function ForgetPassword() {
  return (
    <>
      <MidNav/>
      <hr />
          <motion.div className="relative pt-32" initial={{ x: '-150%' }} animate={{ x: 0 }}
      transition={{ duration: 1, ease: 'easeOut'  }} >
        <LazyLoadImage src={cart} alt="" className="w-full h-[15rem] "/>
        <div className="text-white">
  <h5 className="absolute left-0 top-0 flex flex-col text-4xl bg-black bg-opacity-30 w-full lg:px-[35rem] px-[7rem] py-[5.1rem]  font-bold text-center pt-[218px]"> Reset <span className="text-sm font-semibold mt-2">
          <Link to="/">HOME</Link>  - RESET </span></h5>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 pt-8 grid lg:grid-cols-2 grid-cols-1">
   <motion.div className=""             
              animate={{ y: [0, 20,0] }} 
              transition={{ duration: 3, repeat: Infinity }} >
   <LazyLoadImage src={log} alt="Login-img" className="lg:w-[22rem] rounded-t-full bg-blue-400 " />
   </motion.div>

        <Card className=" lg:w-[80%] lg:h-[90%] mt-10">
            <div className="flex flex-col justify-center items-center">
                <h5 className="lg:text-4xl text-2xl font-bold pb-6">Reset Password</h5>
                <p className="text-center text-xl text-gray-500 pb-4">Please enter the email address that you used to register, and we will send you a link to reset your password via Email.</p>
            </div>
      <form className="flex flex-col gap-4">
        <div> 
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Email address" className="text-md"/>
          </div>
          <TextInput id="email1" type="email" placeholder="Email address" required />
        </div>
       
        
<div className="flex justify-between">

<div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <div className="flex items-center gap-2">
          <Label className=" underline cursor-pointer hover:text-blue-700"> <Link to="/login">Cancel</Link> </Label>
        </div>

</div>
        <button type="submit" className="bg-black hover:bg-blutext-blue-700 text-white py-4 rounded-md font-bold lg:text-xl mt-4 hover:bg-blue-700 hover:scale-105 duration-150">SUBMIT</button>
        
      </form>
    </Card>

      </div>
      <Footer1/>
      <ArrowTop/>
    </>
  )
}
