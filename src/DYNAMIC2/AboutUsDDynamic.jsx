import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function AboutUsDDynamic({AboutUsD}) {
  return (
    <>

    <div className="py-4 flex flex-col relative group">
      <div className="relative">
        <LazyLoadImage src={AboutUsD.img} alt="" className="rounded-2xl" />
        
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Link to="https://www.facebook.com/" target="blank"><FaFacebook className="text-white text-2xl hover:text-blue-500 cursor-pointer " />
          </Link>
          <Link to="https://www.twitter.com/" target="blank"><FaTwitter className="text-white text-2xl hover:text-blue-400 cursor-pointer" /></Link>
          <Link to="https://www.instagram.com/" target="blank"><FaInstagram className="text-white text-2xl hover:text-pink-500 cursor-pointer" /></Link>
          <Link to="https://www.linkedin.com/" target="blank"> <FaLinkedin className="text-white text-2xl hover:text-blue-700 cursor-pointer" /></Link>
        </div>
      </div>

      {/* النصوص */}
      <h1 className="text-xl font-bold mt-4">{AboutUsD.title1}</h1>
      <h2 className="text-sm">{AboutUsD.title2}</h2>
    </div>
    </>
  )
}
