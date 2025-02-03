import { Link } from "react-router-dom"
import log from "../assets/log.png"
import MidNav from "../LAYOUT/MidNav"
import { motion } from "framer-motion"
import cart from "../assets/cart.jpg" 
import {Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Footer1 from "../LAYOUT/Footer"
import { LazyLoadImage } from "react-lazy-load-image-component"
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };
    fetch("https://ecom.quick-ad.net/public/api/auth/login-by-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then( async data => {
        
        if (data.status) {
          console.log("Success:", data);

          // localStorage.setItem('token', data.token);
          sessionStorage.setItem('token', data.token);
          navigate("/");
          setEmail("");
          setPassword("");
        } else {
          console.error("Error:", data.message);
          alert(data.message); 
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <>
      <MidNav/>
              <motion.div className="relative pt-32" initial={{ x: '-150%' }} animate={{ x: 0 }}
      transition={{ duration: 1, ease: 'easeOut'  }} >
        <LazyLoadImage src={cart} alt="" className="w-full h-[15rem] "/>
        <div className="text-white">
  <h5 className="absolute left-0 top-0 flex flex-col text-4xl bg-black bg-opacity-30 w-full lg:px-[35rem] px-[7rem] py-[5.1rem]  font-bold text-center pt-[210px]"> Login <span className="text-lg font-semibold mt-2">
          <Link to="/">HOME</Link>  - LOGIN</span></h5>
        </div>
      </motion.div>
      
      <div className="container mx-auto px-4 pt-8 grid lg:grid-cols-2 grid-cols-1">
   <motion.div className=""             
              animate={{ y: [0, 20,0] }} 
              transition={{ duration: 3, repeat: Infinity }} >
   <LazyLoadImage src={log} alt="Login-img" className="lg:w-[20rem] bg-blue-400 rounded-t-full" />
   </motion.div>
   
      <form className="flex flex-col gap-4 border border-black  p-4 rounded-2xl" onSubmit={submitHandler}>
        <div> 
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" className="text-md"/>
          </div>
          <TextInput id="email1" type="email" placeholder="Enter your email" required onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" className="text-md"/>
          </div>
          <TextInput id="password1" type="password" placeholder="Enter your password"  required onChange={(e) => setPassword(e.target.value)}/>
        </div>
        
<div className="flex justify-between ">

<div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <div className="flex items-center gap-2">
          <Label className=" underline cursor-pointer hover:text-blue-700"> <Link to="/forget">Forgot password?</Link> </Label>
        </div>

</div>
        <button type="submit" className="bg-black hover:bg-blue-700 text-white py-4 rounded-md font-bold lg:text-xl mt-4">SIGN IN</button>
        <button type="submit" className="bg-black hover:bg-blue-700 text-white py-4  rounded-md font-bold lg:text-xl">Don't have account? <span className=" cursor-pointer hover:underline pl-2"><Link to="/register">Create account</Link></span>
        </button>
      </form>
      </div>
      <Footer1/>
    </>
  )
}
