import { FaLocationArrow } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function ArrowIcon() {
  return (
    <>
<div class="relative group">
  <div
    class="w-12 h-12 bg-white text-black flex items-center justify-center rounded-full cursor-pointer transform -rotate-55 text-3xl hover:bg-red-600 hover:text-white lg:mr-0 mr-6">
   <FaLocationArrow />
  </div>

  <div
    class="absolute top-[-12rem] left-6 flex flex-col space-y-2 opacity-0 transform scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
    <a href="https://www.facebook.com/" target="blank" class="w-10 h-10 bg-white text-black flex items-center justify-center rounded-full hover:bg-blue-600 hover:text-white"><FaFacebookF /></a>
    <a href="https://www.twitter.com/" target="blank" class="w-10 h-10 bg-white text-black flex items-center justify-center rounded-full  hover:bg-blue-500 hover:text-white"><FaTwitter /></a>
    <a href="https://www.instagram.com/" target="blank" class="w-10 h-10 bg-gradient-to-r bg-white text-black hover:from-red-600 hover:to-yellow-500 hover:text-white flex items-center justify-center rounded-full ">
  <FaInstagram />
</a>
    <a href="https://www.linkedin.com/" target="blank" class="w-10 h-10 bg-white text-black flex items-center justify-center rounded-full  hover:bg-blue-700 hover:text-white"><FaLinkedin /></a>
  </div>
</div>
    </>
  )
}
