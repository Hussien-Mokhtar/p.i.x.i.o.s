import woo from "../assets/woogirl-1.png";
import waad2 from "../assets/waad2.png";
import blue from "../assets/blue.png";
import check from "../assets/checkgirl.png";
import pink from "../assets/pink.png";
import carizma from "../assets/carizma.png"
import classic from "../assets/classic.png"
import curly from "../assets/curlygirl.png"
import { IoMdHeartEmpty } from "react-icons/io";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { LazyLoadImage } from "react-lazy-load-image-component";
import HomeDDDynamic from "../DYNAMIC/HomeDDDynamic";
import { Link } from "react-router-dom";
export default function HomeDD() {
        const HomeDDD = [
            {id:1, img:woo ,title:"Cozy Knit Cardigan Sweater", price:"$80" },
            {id:2, img:waad2 ,title:"Sophisticated Swagger Suit", price:"$75" },
            {id:3, img:blue ,title:"Classic Denim Skinny Jeans", price:"$96" },
            {id:4, img:check ,title:"Athletic Mesh Sportsbr Leggings", price:"$86" },
            {id:5, img:pink ,title:"Vintage Denim Overalls Shorts", price:"$60" },
            {id:6, img:carizma ,title:"Satin Wrap Party Blouse", price:"$72" },
            {id:8, img:classic ,title:"Water-Resistant Windbreaker Jacket", price:"$60" },
            {id:8, img:curly ,title:"Water-Resistant Windbreaker Jacket", price:"$60" },
        ]
  
  return (
    <>
                     <Link to={`/shopdetails/${HomeDDD.id}`}>  

        <div className="mt-8 lg:-mx-9 grid lg:grid-cols-4 grid-cols-2 lg:gap-6 gap-4 lg:w-[70rem] ">
            <>
            { HomeDDD.map((hdd)=>{
            return <HomeDDDynamic key={hdd.id} HomeDD={hdd}/>
                })}
            </>
            
                      </div>

      {/*
      
        <div className="parentt relative ">
        <h1 className=' absolute lg:-top-[21rem] -top-[19.5rem] lg:left-5 bg-white rounded-xl px-2 font-semibold text-sm z-10'>Get 20% off</h1></div>
          <h1 className='title rounded-3xl border-4 border-white text-sm px-5 py-2 cursor-pointer hover:bg-white hover:text-black font-bold hover:border-4 hover:border-black '>QUICK VIEW</h1>
        </div>
        <div className="parentt rounded-2xl p-1 text-center relative">
        <LazyLoadImage src={blue} alt="All Product 3" className="lg:h-[19rem] h-[16rem] lg:w-[40rem] hover:-translate-y-3 duration-150 rounded-xl" />
        <p className="flex justify-around font-bold">Classic Denim Skinny <br /> Jeans <span>$70</span></p>
        <div className=" absolute lg:right-4 right-2 top-2  text-white z-10">
        <IoMdHeartEmpty className='bg-black opacity-40 rounded-full p-2 text-4xl cursor-pointer '/><RiShoppingBasket2Line className='bg-black opacity-40 rounded-full p-2 text-4xl cursor-pointer mt-1'/></div>
        
        <div className="parentt relative ">
        <h1 className=' absolute lg:-top-[21rem] -top-[18rem] lg:left-5 bg-white rounded-xl px-2 font-semibold text-sm z-10'>Get 20% off</h1></div>
          <h1 className='title rounded-3xl border-4 border-white text-sm px-5 py-2 cursor-pointer hover:bg-white hover:text-black font-bold hover:border-4 hover:border-black '>QUICK VIEW</h1>
        </div>
        <div className="parentt rounded-2xl p-1 text-center relative">
        <LazyLoadImage src={check} alt="All Product 4" className="lg:h-[19rem] h-[16rem] lg:w-[40rem] hover:-translate-y-3 duration-150 rounded-xl"/>
      <p className="flex justify-around it font-bold">Athletic Mesh Sportsbr <br /> Leggings<span>$60</span></p>
            
        <div className=" absolute lg:right-4 right-2 top-2 text-white z-10">
        <IoMdHeartEmpty className='bg-black opacity-40 rounded-full p-2 text-4xl cursor-pointer '/><RiShoppingBasket2Line className='bg-black opacity-40 rounded-full p-2 text-4xl cursor-pointer mt-1'/></div>
        
        <div className="parentt relative ">
        <h1 className=' absolute lg:-top-[21rem] -top-[19.5rem] lg:left-5 bg-white rounded-xl px-2 font-semibold text-sm z-10'>Get 20% off</h1></div>
          <h1 className='title rounded-3xl border-4 border-white text-sm px-5 py-2 cursor-pointer hover:bg-white hover:text-black font-bold hover:border-4 hover:border-black '>QUICK VIEW</h1>
            </div>
            <div className="parentt rounded-2xl p-1 text-center relative">
          <LazyLoadImage src={carizma} alt="All Product 1" className="lg:h-[19rem] h-[16rem] lg:w-[40rem] hover:-translate-y-3 duration-150 rounded-xl" />
              <p className="flex justify-around font-bold">Vintage Denim <br /> Overalls Shorts<span>$80</span></p>
                    <div className=" absolute lg:right-4 right-2 top-2  text-white z-10">
        <IoMdHeartEmpty className='bg-black opacity-40 rounded-full p-2 text-4xl cursor-pointer '/><RiShoppingBasket2Line className='bg-black opacity-40 rounded-full p-2 text-4xl cursor-pointer mt-1'/></div>
        <div className="parentt relative ">
        <h1 className=' absolute lg:-top-[21rem] -top-[18rem] lg:left-5 bg-white rounded-xl px-2 font-semibold text-sm z-10'>Get 20% off</h1></div>
          <h1 className='title rounded-3xl border-4 border-white text-sm px-5 py-2 cursor-pointer hover:bg-white hover:text-black font-bold hover:border-4 hover:border-black '>QUICK VIEW</h1>
        </div>
        <div className="parentt rounded-2xl p-1 text-center relative">
          <LazyLoadImage src={pink} alt="All Product 1" className="lg:h-[19rem] h-[16rem] lg:w-[40rem] hover:-translate-y-3 duration-150 rounded-xl" />
              <p className="flex justify-around font-bold">Satin Wrap Party <br /> Blouse<span>$80</span></p>
                    <div className=" absolute lg:right-4 right-2 top-2  text-white z-10">
        <IoMdHeartEmpty className='bg-black opacity-40 rounded-full p-2 text-4xl cursor-pointer '/><RiShoppingBasket2Line className='bg-black opacity-40 rounded-full p-2 text-4xl cursor-pointer mt-1'/></div>
        <div className="parentt relative ">
        <h1 className=' absolute lg:-top-[21rem] -top-[18rem] lg:left-5 bg-white rounded-xl px-2 font-semibold text-sm z-10'>Get 20% off</h1></div>
          <h1 className='title rounded-3xl border-4 border-white text-sm px-5 py-2 cursor-pointer hover:bg-white hover:text-black font-bold hover:border-4 hover:border-black '>QUICK VIEW</h1>
        </div>
        <div className="parentt rounded-2xl p-1 text-center relative">
          <LazyLoadImage src={classic} alt="All Product 1" className="lg:h-[19rem] h-[16rem] lg:w-[40rem] hover:-translate-y-3 duration-150 rounded-xl" />
              <p className="flex justify-around font-bold">Plaid Wool Winter <br /> Coat<span>$80</span></p>
                    <div className=" absolute lg:right-4 right-2 top-2  text-white z-10">
        <IoMdHeartEmpty className='bg-black opacity-40 rounded-full p-2 text-4xl cursor-pointer '/><RiShoppingBasket2Line className='bg-black opacity-40 rounded-full p-2 text-4xl cursor-pointer mt-1'/></div>
        <div className="parentt relative ">
        <h1 className=' absolute lg:-top-[21rem] -top-[18rem] lg:left-5 bg-white rounded-xl px-2 font-semibold text-sm z-10'>Get 20% off</h1></div>
          <h1 className='title rounded-3xl border-4 border-white text-sm px-5 py-2 cursor-pointer hover:bg-white hover:text-black font-bold hover:border-4 hover:border-black '>QUICK VIEW</h1>
        </div>
        <div className="parentt rounded-2xl p-1 text-center relative">
          <LazyLoadImage src={curly} alt="All Product 1" className="lg:h-[19rem] h-[16rem] lg:w-[40rem] hover:-translate-y-3 duration-150 rounded-xl" />
              <p className="flex justify-around font-bold">Water-Resistant <br /> Windbreaker Jacket<span>$80</span></p>
                    <div className=" absolute lg:right-4 right-2 top-2  text-white z-10">
        <IoMdHeartEmpty className='bg-black opacity-40 rounded-full p-2 text-4xl cursor-pointer '/><RiShoppingBasket2Line className='bg-black opacity-40 rounded-full p-2 text-4xl cursor-pointer mt-1'/></div>
        <div className="parentt relative ">
        <h1 className=' absolute lg:-top-[21rem] -top-[18rem] lg:left-5 bg-white rounded-xl px-2 font-semibold text-sm z-10'>Get 20% off</h1></div>
          <h1 className='title rounded-3xl border-4 border-white text-sm px-5 py-2 cursor-pointer hover:bg-white hover:text-black font-bold hover:border-4 hover:border-black '>QUICK VIEW</h1>
        </div> */}
             </Link> 

    </>
  )
}
