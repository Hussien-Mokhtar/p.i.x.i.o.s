import { motion } from "framer-motion"
import { LazyLoadImage } from "react-lazy-load-image-component"
import cart from "../assets/cart.jpg"
import { Link } from "react-router-dom"
import NotARobot from "./Robot"
export default function ContactUs() {
  return (
    <>
          <motion.div className="relative pt-32" initial={{ x: '-150%' }} animate={{ x: 0 }}
      transition={{ duration: 1, ease: 'easeOut'  }} >
        <LazyLoadImage src={cart} alt="" className="w-full h-[15rem] "/>
        <div className="text-white">
  <h5 className="absolute left-0 top-0 flex flex-col text-4xl bg-black bg-opacity-30 w-full lg:px-[33rem] px-[7rem] lg:py-[8.1rem] py-[3.5rem]  font-bold text-center lg:mt-[2rem] pt-[210px]"> ContactUs <span className="text-lg font-semibold mt-2">
          <Link to="/">HOME</Link>  - CONTACTUS</span></h5>
        </div>
      </motion.div>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:mx-20 mx-8 font-medium py-10 ">
        <div className=""><h1> <h2 className="lg:text-4xl text-2xl font-bold">DISCOVER US</h2> <h3 className=" underline cursor-pointer hover:text-blue-700 duration-150 py-2 lg:text-3xl text-xl">Pixio is here to help you;</h3> <h3 className="lg:text-3xl text-xl ">Our experts are available to answer <br /> any questions you might have. We’ve got the answers.</h3></h1>
<div className="font-semibold mt-20"><h1 className="font-semibold lg:text-2xl text-lg pb-6">Call Us <br />+01-123-456-7890 <br />+01-123-456-7890</h1></div>
</div>

        <div className="flex items-center justify-center  h-screen bg-black rounded-3xl ">
  <div className="w-full max-w-md  rounded-lg shadow-md p-8">
    <form className="mt-6">
      <div className="mb-4">
        <label className="block text-white text-sm font-semibold my-2" >
          Your Name</label>
        <input type="name" id="name" placeholder="Your Name"required
          className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black"/>
          <label className="block text-white text-sm font-semibold my-2 " >
          Email Address </label>
        <input type="email" id="email" placeholder="Phone Number"required
          className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black"/><label className="block text-white text-sm font-semibold my-2 " >
          Phone Number </label>
        <input type="number" id="number" placeholder="Phone Number"required
          className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black"/><label className="block text-white text-sm font-semibold my-2 " >
          Massage </label>
        <input type="massage" id="massage" placeholder="Massage"required
          className="w-full px-4 py-8 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black"/>
      </div>
      <NotARobot/>
      <button type="submit"
        className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">SUBMIT</button>
    </form>
  </div>
</div>
        </div>
        <div className="" >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.3825624477!2d75.65046970649679!3d26.88544791796718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C+Rajasthan!5e0!3m2!1sen!2sin!4v1500819483219"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map" className=" w-full lg:h-[40rem] h-[25rem]"></iframe>
            </div>

    </>
  )
}
