import woo from "../assets/woogirl-1.png";
import waad2 from "../assets/waad2.png";
import blue from "../assets/blue.png";
import check from "../assets/checkgirl.png";
import pink from "../assets/pink.png";
import carizma from "../assets/carizma.png"
import classic from "../assets/classic.png"
import curly from "../assets/curlygirl.png"
import harry from "../assets/harry.png"
import purple from "../assets/purple.png"
import smile from "../assets/smile.png"
import red from "../assets/red.png"
import { motion } from "framer-motion";
import cart from "../assets/cart.jpg"
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ShopADynamic from "../DYNAMIC2/ShopADynamic";
import ShopB from "./ShopB";
export default function ShopA() {
    const shopR = [
        {id:1, img:woo ,title:"Cozy Knit Cardigan Sweater", price:"$80" },
        {id:2, img:waad2 ,title:"Sophisticated Swagger Suit", price:"$75" },
        {id:3, img:blue ,title:"Classic Denim Skinny Jeans", price:"$96" },
        {id:4, img:check ,title:"Athletic Mesh Sportsbr Leggings", price:"$86" },
        {id:5, img:pink ,title:"Vintage Denim Overalls Shorts", price:"$60" },
        {id:6, img:carizma ,title:"Satiin Wrap Party Blouse", price:"$72" },
        {id:7, img:classic ,title:"Plaid Wool Winter Coat Classic", price:"$90" },
        {id:8, img:curly ,title:"Water-Resistant Windbreaker Jacket", price:"$60" },
        {id:9, img:harry ,title:"Comfy Lounge Jogger Pants", price:"$65" },
        {id:10, img:purple ,title:"Stylish Fedora Hat Collection", price:"$80" },
        {id:11, img:smile ,title:"Suede Ankle Booties Collection", price:"$77" },
        {id:12, img:red ,title:"Hiking Outdoor Gear Collection", price:"$88" },
    ]
  return (
    <>
              <motion.div className="relative pt-32" initial={{ x: '-150%' }} animate={{ x: 0 }}
      transition={{ duration: 1, ease: 'easeOut'  }} >
        <LazyLoadImage src={cart} alt="" className="w-full h-[15rem] "/>
        <div className="text-white">
  <h5 className="absolute left-0 top-0 flex flex-col text-4xl bg-black bg-opacity-30 w-full lg:px-[35rem] px-[7rem] py-[5.1rem]  font-bold text-center pt-[210px]"> Shop <span className="text-lg font-semibold mt-2">
          <Link to="/">HOME</Link>  - SHOP</span></h5>
        </div>
      </motion.div>

      <div className="col-span-12 grid grid-cols-12 gap-10 pt-8">
        <div className=" lg:col-span-4 col-span-12 lg:w-[80%] w-full"><ShopB/></div>
        <div className=" lg:col-span-8 col-span-12 grid lg:grid-cols-4 grid-cols-1 lg:w-[100%] w-[80%]  gap-3 lg:ml-0 ml-3">
{
    shopR.map((sh1)=>{
return <ShopADynamic key={sh1.id} shopA={sh1}/>
    })}
        </div>
      </div>
      
    </>
  )
}