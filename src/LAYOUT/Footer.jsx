import { Footer } from "flowbite-react";
import {  BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import visa1 from "../assets/visa1.png"
import visa2 from "../assets/visa2.png"
import visa3 from "../assets/visa3.png"
import visa4 from "../assets/visa4.png"
import visa5 from "../assets/visa5.png"
import visa6 from "../assets/visa6.png"
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"
import { FaArrowRightLong } from "react-icons/fa6";
import woo from "../assets/woogirl-1.png"
import waad from "../assets/waad.png"
import yellow from "../assets/yellow.png"
export default function Footer1() {
  return (
    <>
    <div className=" text-sm pt-10" data-aos="fade-right" data-aos-duration="3000" >
    <Footer >
      <div className="w-full ">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-16 md:grid-cols-5 shadow-md ">
          <div>
            <img src={logo} alt="Logo" className="w-3/5 pb-6"/>            
            <Footer.LinkGroup col>
    <Footer className="lg:w-[20rem] w-[10rem] shadow-none text-black leading-7 font-semibold">Address : 451 Wall Street, UK, London <br />E-mail : example@info.com <br />Phone : (064) 332-1233...</Footer>
     <Footer className="shadow-none text-sm font-bold text-black">subscribe to our newsletter</Footer>
     <form action=""  class="relative w-full max-w-xs">
  <input type="text" placeholder="Your Email Address" required
    class="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 bg-blue-500 placeholder-white text-white"/>
  <button class="absolute inset-y-0 right-3 flex items-center justify-center text-black" >
        <FaArrowRightLong/>
  </button>
     </form>
         </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Recent Posts" className=" text-lg font-bold text-black"/>
            <Footer.LinkGroup col className=" text-sm">
  <Footer.Link ><div className="flex gap-6"> <img src={woo} alt="" className="lg:w-[5rem] w-[10rem] h-[3.5rem] rounded-lg"/><span><h1 className="text-black font-semibold ">Cozy Knit Cardigan Sweater <br /><h1 className="text-[12px] text-gray-500">July 23, 2024</h1></h1></span> </div> </Footer.Link>
  <Footer.Link ><div className="flex gap-4"> <img src={waad} alt="" className="w-[5rem] h-[3.5rem] rounded-lg"/><span><h1 className="text-black font-semibold">Sophisticated Swagger Suit<br /><h1 className="text-[12px] text-gray-500">July 23, 2024</h1></h1></span> </div> </Footer.Link> <Footer.Link ><div className="flex gap-4"> <img src={yellow} alt="" className="w-[5rem] h-[3.5rem] rounded-lg"/><span><h1 className="text-black font-semibold"> Athletic Mesh Sports Leggings<br /><h1 className="text-[12px] text-gray-500">July 23, 2024</h1></h1></span> </div></Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div className="">
            <Footer.Title title="Our Stores" className=" text-lg font-bold text-black"/>
            <Footer.LinkGroup col className=" text-sm">
              <Footer.Link href="#">New York</Footer.Link>
              <Footer.Link href="#">London SF</Footer.Link>
              <Footer.Link href="#">Edinburgh</Footer.Link>
              <Footer.Link href="#"><Link to="/maincart">Los Angeles</Link></Footer.Link>
              <Footer.Link href="#">Chicago</Footer.Link>
              <Footer.Link href="#">Las Vegas</Footer.Link>

            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Useful Links" className=" text-lg font-bold text-black"/>
            <Footer.LinkGroup col className=" text-sm">
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Returns</Footer.Link>
              <Footer.Link href="#">Terms & Conditions</Footer.Link>
              <Footer.Link href="#">Contact Us</Footer.Link>
              <Footer.Link href="#">Latest News</Footer.Link>
              <Footer.Link href="#">Our Sitemap</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Footer Menu" className=" text-lg font-bold text-black"/>
            <Footer.LinkGroup col className=" text-sm">
              <Footer.Link href="#">Instagram profile</Footer.Link>
              <Footer.Link href="#">New Collection</Footer.Link>
              <Footer.Link href="#">Woman Dress</Footer.Link>
              <Footer.Link href="#">Contact Us</Footer.Link>
              <Footer.Link href="#">Latest News</Footer.Link>
            </Footer.LinkGroup>

          </div>
        </div>
<hr />
        <div className="w-full px-4 py-6 sm:flex sm:items-center sm:justify-between ">
          <Footer.Copyright href="#" by="025 DexignZone Theme. All Rights Reserved." className="text-black font-semibold" />
          <div className="flex w-10 justify-center">
            <h1 className="mt-1 px-1 font-semibold">Payment:</h1>
            <img src={visa1} alt="visa" className=" cursor-pointer"/>
            <img src={visa2} alt="visa" className=" cursor-pointer"/>
            <img src={visa3} alt="visa" className=" cursor-pointer"/>
            <img src={visa4} alt="visa" className=" cursor-pointer"/>
            <img src={visa5} alt="visa" className=" cursor-pointer"/>
            <img src={visa6} alt="visa" className=" cursor-pointer"/>
          </div>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center  ">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsLinkedin} />
          </div>
        </div>
      </div>
    </Footer>

    </div>
    </>
  )
}
