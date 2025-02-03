import { Card, Checkbox, Label, TextInput } from "flowbite-react";
import log from "../assets/log.png";
import { Link } from "react-router-dom";
import MidNav from "../LAYOUT/MidNav";
import { motion } from "framer-motion";
import cart from "../assets/cart.jpg";
import { useState } from "react";
import ArrowTop from "../LAYOUT/ArrowTop";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Footer1 from "../LAYOUT/Footer";

export default function Register() {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); 
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const data = {
      name, lastname, email, phone, password,
    };

    if (!name || !lastname || !email || !phone || !password) {
      alert("Please fill in all fields.");
      return;
    }
    try {
      const response = await fetch("https://ecom.quick-ad.net/public/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Success:", result);

      if (result.status) {
        alert("Registration successful!"); 
      } else {
        setErrorMessage(result.message); 
        alert(result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again later.");
    } finally {
      
      setName("");
      setLastName("");
      setEmail("");
      setPhone(""); 
      setPassword("");
    }
  };
  return (
    <>
      <MidNav />
          <motion.div className="relative pt-32" initial={{ x: '-150%' }} animate={{ x: 0 }}
      transition={{ duration: 1, ease: 'easeOut'  }} >
        <LazyLoadImage src={cart} alt="" className="w-full h-[15rem] "/>
        <div className="text-white">
  <h5 className="absolute left-0 top-0 flex flex-col text-4xl bg-black bg-opacity-30 w-full lg:px-[35rem] px-[7rem] py-[5.1rem]  font-bold text-center pt-[218px]"> Register <span className="text-sm font-semibold mt-2">
          <Link to="/">HOME</Link>  - REGISTER</span></h5>
        </div>
      </motion.div>

   <motion.div className=""             
              animate={{ y: [0, 20,0] }} 
              transition={{ duration: 3, repeat: Infinity }} >
   <LazyLoadImage src={log} alt="Login-img" className="lg:w-[26rem] h-[38rem] rounded-t-full ml-20 mt-24 bg-blue-400 " />
   </motion.div>

      <div className="container mx-auto px-4 pt-4 grid lg:grid-cols-1 grid-cols-1 absolute lg:left-[50%] lg:top-[70%]  ">
        <div className="grid lg:grid-cols-1 lg:ml-[-60%] text-center ">
          <h5 className="lg:text-3xl font-bold pb-4">Create account</h5>
          <p className="lg:text-xl font-semibold pb-4 text-gray-500">Please register account detail</p>
        </div>

        <Card className="lg:w-[45%] lg:h-[80%] lg:py-20 ">
          <form className="flex flex-col gap-4" onSubmit={submitHandler}>
            <div>
              <div className="lg:mb-2 block">
                <Label htmlFor="name" value="First name" className="lg:text-md" />
              </div>
              <TextInput id="name" placeholder="First name" required value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <div className="lg:mb-2 block">
                <Label htmlFor="lastname" value="Last name" className="lg:text-md" />
              </div>
              <TextInput id="lastname" placeholder="Last name" required value={lastname} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div>
              <div className="lg:mb-2 block">
                <Label htmlFor="email" value="Your email" className="lg:text-md" />
              </div>
              <TextInput id="email" type="email" placeholder="Your email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <div className="lg:mb-2 block">
                <Label htmlFor="phone" value="Your phone" className="lg:text-md" />
              </div>
              <TextInput id="phone" placeholder="Your phone" required value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
              <div className="lg:mb-2 block">
                <Label htmlFor="password" value="Your password" className="lg:text-md" />
              </div>
              <TextInput id="password" type="password" placeholder="Your password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">I have read and agree with the <span className="hover:text-blue-700 hover:underline"> Terms & Condition.</span></Label>
              </div>
            </div>
            <button type="submit" className="bg-black hover:bg-blue-700 text-white lg:py-4 py-2 rounded-md font-bold lg:text-xl mt-4">CREATE</button>
            <button type="button" className="bg-black hover:bg-blue-700 text-white lg:py-4 py-2 rounded-md font-bold lg:text-xl">
              Already have account? <span className="cursor-pointer hover:underline pl-2"><Link to="/login">Login</Link></span>
            </button>
          </form>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>} 
        </Card>
      </div>
<div className="mt-56"> <Footer1 /></div>
        <ArrowTop />
    </>
  );
}
