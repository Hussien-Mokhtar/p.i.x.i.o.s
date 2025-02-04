import { LazyLoadImage } from "react-lazy-load-image-component"
import cart from "../assets/cart.jpg"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import blog1 from "../assets/blog1.jpg"
import blog2 from "../assets/blog2.jpg"
import blog3 from "../assets/blog3.jpg"
import blog4 from "../assets/blog4.jpg"
import Footer1 from "../LAYOUT/Footer"
import BlogDynamic from "../DYNAMIC2/BlogDynamic.jsx"

export default function Blog() {
  const blog = [
{ id:1 , img:blog1, date:"17 May 2025" , title:"Trendsetter Chronicles: Unveiling the Latest in Fashion"},
{ id:2 , img:blog2, date:"10 Jun 2025" , title:"Closet Confidential: Behind-the-Scenes of a Fashionista"},
{ id:3 , img:blog3, date:"15 May 2025" , title:"Chic & Unique: Personalized Fashion Finds"},
{ id:4 , img:blog4, date:"7 Sep 2025" , title:"Runway Rundown: Decoding Fashion Week’s Best Looks"}

  ]
  return ( 
    <>
          <motion.div className="relative pt-32" initial={{ x: '-150%' }} animate={{ x: 0 }}
      transition={{ duration: 1, ease: 'easeOut'  }} >
        <LazyLoadImage src={cart} alt="" className="w-full h-[15rem] "/>
        <div className="text-white">
  <h5 className="absolute left-0 top-0 flex flex-col text-4xl bg-black bg-opacity-30 w-full lg:px-[35rem] px-[7rem] py-[5.1rem]  font-bold text-center pt-[210px]"> Blog <span className="text-lg font-semibold mt-2">
          <Link to="/">HOME</Link>  - BLOG</span></h5>
        </div>
      </motion.div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mx-4 py-8">
      { blog.map((b1)=>{
          return <BlogDynamic key={b1.id} blogA={b1}/>
        })}
      </div>
      <Footer1/>
    </>
  )}
