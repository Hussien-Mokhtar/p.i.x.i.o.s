import { LazyLoadImage } from "react-lazy-load-image-component";
import about1 from "../assets/about1.jpg"
import about2 from "../assets/about2.jpg"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function AboutUsC() {
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 px-8 my-4">
        <div className="my-10">
            <h1 className="lg:text-3xl text-2xl font-bold">Meet our team of creators, <br /> designers, and world-class problem <br /> solvers</h1>
            <h3 className="text-gray-500 my-4 ">There are many variations of passages of Lorem Ipsum available, but the majority <br /> have suffered alteration in some form, by injected humour, or randomised words.</h3>
            <button className="bg-black text-white px-6 py-2 rounded-xl">Join Our Team</button>
        </div>
        <div className="flex text-center gap-8 py-8">

      <div className="relative group">
        <LazyLoadImage src={about1} alt="John Doe" className="rounded-2xl " />
        <h1 className="text-xl font-bold mt-4">John Doe</h1>
        <h2 className="text-sm">CEO & Founder</h2>

        <div className="absolute inset-0 bg-black bg-opacity-50 lg:h-[17.6rem] h-[9.2rem] flex items-center justify-center gap-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
          <Link to="https://www.facebook.com/" target="blank"><FaFacebook className="text-white text-2xl hover:text-blue-500 cursor-pointer" />
          </Link>
          <Link to="https://www.twitter.com/" target="blank"><FaTwitter className="text-white text-2xl hover:text-blue-400 cursor-pointer" /></Link>
          <Link to="https://www.instagram.com/" target="blank"><FaInstagram className="text-white text-2xl hover:text-pink-500 cursor-pointer" /></Link>
          <Link to="https://www.linkedin.com/" target="blank"> <FaLinkedin className="text-white text-2xl hover:text-blue-700 cursor-pointer" /></Link>
        </div>
      </div>

      <div className="relative group">
        <LazyLoadImage src={about2} alt="Ivan Mathews" className="rounded-2xl" />
        <h1 className="text-xl font-bold mt-4">Ivan Mathews</h1>
        <h2 className="text-sm">iOS Developer</h2>

        <div className="absolute inset-0 bg-black bg-opacity-50 lg:h-[17.6rem] h-[9.2rem] flex items-center justify-center gap-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <FaFacebook className="text-white text-2xl hover:text-blue-500 cursor-pointer" />
          <FaTwitter className="text-white text-2xl hover:text-blue-400 cursor-pointer" />
          <FaInstagram className="text-white text-2xl hover:text-pink-500 cursor-pointer" />
          <FaLinkedin className="text-white text-2xl hover:text-blue-700 cursor-pointer" />
        </div>
      </div>
    </div>
      </div>
    </>
  )
}
