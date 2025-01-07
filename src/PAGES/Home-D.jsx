import { useState } from "react";
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
import HomeDD from "./Home-DD";

export default function HomeD() {
  const items = [
    { id: 1, name: "All" },
    { id: 2, name: "Dresses" },
    { id: 3, name: "Tops" },
    { id: 4, name: "Outerwear" },
    { id: 5, name: "Jacket" },
  ];

  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <div className="container mx-auto " data-aos="fade-up" data-aos-duration="1500">
      <h1 className="text-center lg:text-4xl text-2xl font-bold pb-5 pt-8">Most Popular Products</h1>

      <ul className="flex justify-center space-x-4 mt-4">
        {items.map((item) => (
          <li
            key={item.id}
            className={`cursor-pointer lg:text-lg text-sm font-semibold lg:px-4 px-2 py-2 border rounded-lg ${
              selectedItem.name === item.name
                ?"bg-black text-white" :"hover:bg-black hover:text-white"
            }`}
            onClick={() => setSelectedItem(item)}
          >
            {item.name}
          </li>
        ))}
      </ul>
      {selectedItem && (
        <div className="mt-8 lg:-mx-9 grid lg:grid-cols-4 grid-cols-2 lg:gap-6 gap-4 lg:w-[70rem] ">
          {selectedItem.name === "All" && (
            <>
            <HomeDD/>
            </>
          )}
          {selectedItem.name === "Dresses" && (
            <>
    <div className="parentt rounded-2xl p-1 text-center relative">
    <img src={woo} alt="All Product 1" className="lg:h-[19rem] h-[16rem] lg:w-[40rem] hover:-translate-y-3 duration-150 rounded-xl" />
        <p className="flex justify-around font-bold">Cozy Knit Cardigan <br /> Sweater<span>$80</span></p>
              <div className=" absolute lg:right-4 right-2 top-2  text-white z-10">
  <IoMdHeartEmpty className='bg-black opacity-40 rounded-full p-2 text-4xl '/><RiShoppingBasket2Line className='bg-black opacity-40 rounded-full p-2 text-4xl mt-1'/></div>
  <div className="relative ">
  <h1 className=' absolute lg:-top-[21rem] -top-[18rem] lg:left-5 bg-white rounded-xl px-2 font-semibold text-sm z-10'>Get 20% off</h1></div>
  <h1 className='title rounded-3xl border-4 border-white text-sm px-5 py-2 '>QUICK VIEW</h1>
  </div>
<div className="parentt rounded-2xl p-1 text-center relative">
    <img src={waad2} alt="All Product 2" className="lg:h-[19rem] h-[16rem] lg:w-[40rem] hover:-translate-y-3 duration-150 rounded-xl"/>
<p className="flex justify-around font-bold">Sophisticated Swagger <br /> Suit <span>$90</span></p>
  <div className=" absolute lg:right-4 right-2 top-2  text-white z-10">
  <IoMdHeartEmpty className='bg-black opacity-40 rounded-full p-2 text-4xl '/><RiShoppingBasket2Line className='bg-black opacity-40 rounded-full p-2 text-4xl mt-1'/></div>

  <div className="parentt relative ">
  <h1 className=' absolute lg:-top-[21rem] -top-[19.5rem] lg:left-5 bg-white rounded-xl px-2 font-semibold text-sm z-10'>Get 20% off</h1></div>
    <h1 className='title rounded-3xl border-4 border-white text-sm px-5 py-2 '>QUICK VIEW</h1>
  </div>
  <div className="parentt rounded-2xl p-1 text-center relative">
  <img src={blue} alt="All Product 3" className="lg:h-[19rem] h-[16rem] lg:w-[40rem] hover:-translate-y-3 duration-150 rounded-xl" />
  <p className="flex justify-around font-bold">Classic Denim Skinny <br /> Jeans <span>$70</span></p>
  <div className=" absolute lg:right-4 right-2 top-2  text-white z-10">
  <IoMdHeartEmpty className='bg-black opacity-40 rounded-full p-2 text-4xl '/><RiShoppingBasket2Line className='bg-black opacity-40 rounded-full p-2 text-4xl mt-1'/></div>
  <div className="parentt relative ">
  <h1 className=' absolute lg:-top-[21rem] -top-[19.5rem] lg:left-5 bg-white rounded-xl px-2 font-semibold text-sm z-10'>Get 20% off</h1></div>
    <h1 className='title rounded-3xl border-4 border-white text-sm px-5 py-2 '>QUICK VIEW</h1>
  </div>

            </>
          )}
          {selectedItem.name === "Tops" && (
            <>
  <div className="parentt rounded-2xl p-1 text-center relative">
  <img src={check} alt="All Product 4" className="lg:h-[19rem] h-[16rem] lg:w-[40rem] hover:-translate-y-3 duration-150 rounded-xl"/>
<p className="flex justify-around it font-bold">Athletic Mesh Sportsbr <br /> Leggings<span>$60</span></p>
      
  <div className=" absolute lg:right-4 right-2 top-2  text-white z-10">
  <IoMdHeartEmpty className='bg-black opacity-40 rounded-full p-2 text-4xl '/><RiShoppingBasket2Line className='bg-black opacity-40 rounded-full p-2 text-4xl mt-1'/></div>
  
  <div className="parentt relative ">
  <h1 className=' absolute lg:-top-[21rem] -top-[19.5rem] lg:left-5 bg-white rounded-xl px-2 font-semibold text-sm z-10'>Get 20% off</h1></div>
    <h1 className='title rounded-3xl border-4 border-white text-sm px-5 py-2 '>QUICK VIEW</h1>
      </div>
      <div className="parentt rounded-2xl p-1 text-center relative">
    <img src={curly} alt="All Product 1" className="lg:h-[19rem] h-[16rem] lg:w-[40rem] hover:-translate-y-3 duration-150 rounded-xl" />
        <p className="flex justify-around font-bold">Vintage Denim <br /> Overalls Shorts<span>$80</span></p>
              <div className=" absolute lg:right-4 right-2 top-2  text-white z-10">
  <IoMdHeartEmpty className='bg-black opacity-40 rounded-full p-2 text-4xl '/><RiShoppingBasket2Line className='bg-black opacity-40 rounded-full p-2 text-4xl mt-1'/></div>
  <div className="parentt relative ">
  <h1 className=' absolute lg:-top-[21rem] -top-[18rem] lg:left-5 bg-white rounded-xl px-2 font-semibold text-sm z-10'>Get 20% off</h1></div>
    <h1 className='title rounded-3xl border-4 border-white text-sm px-5 py-2 '>QUICK VIEW</h1>
  </div>
  <div className="parentt rounded-2xl p-1 text-center relative">
    <img src={pink} alt="All Product 1" className="lg:h-[19rem] h-[16rem] lg:w-[40rem] hover:-translate-y-3 duration-150 rounded-xl" />
        <p className="flex justify-around font-bold">Satin Wrap Party <br /> Blouse<span>$80</span></p>
              <div className=" absolute lg:right-4 right-2 top-2  text-white z-10">
  <IoMdHeartEmpty className='bg-black opacity-40 rounded-full p-2 text-4xl '/><RiShoppingBasket2Line className='bg-black opacity-40 rounded-full p-2 text-4xl mt-1'/></div>
  <div className="parentt relative ">
  <h1 className=' absolute lg:-top-[21rem] -top-[18rem] lg:left-5 bg-white rounded-xl px-2 font-semibold text-sm z-10'>Get 20% off</h1></div>
    <h1 className='title rounded-3xl border-4 border-white text-sm px-5 py-2 '>QUICK VIEW</h1>
  </div>
            </>
          )}
          {selectedItem.name === "Outerwear" && (
            <>
  <div className="parentt rounded-2xl p-1 text-center relative">
    <img src={pink} alt="All Product 1" className="lg:h-[19rem] h-[16rem] lg:w-[40rem] hover:-translate-y-3 duration-150 rounded-xl" />
        <p className="flex justify-around font-bold">Satin Wrap Party <br /> Blouse<span>$80</span></p>
              <div className=" absolute lg:right-4 right-2 top-2  text-white z-10">
  <IoMdHeartEmpty className='bg-black opacity-40 rounded-full p-2 text-4xl '/><RiShoppingBasket2Line className='bg-black opacity-40 rounded-full p-2 text-4xl mt-1'/></div>
  <div className="parentt relative ">
  <h1 className=' absolute lg:-top-[21rem] -top-[18rem] lg:left-5 bg-white rounded-xl px-2 font-semibold text-sm z-10'>Get 20% off</h1></div>
    <h1 className='title rounded-3xl border-4 border-white text-sm px-5 py-2 '>QUICK VIEW</h1>
  </div>
      </>
                      )}
                      {selectedItem.name === "Jacket" && (
                        <>
  <div className="parentt rounded-2xl p-1 text-center relative">
    <img src={carizma} alt="All Product 1" className="lg:h-[19rem] h-[16rem] lg:w-[40rem] hover:-translate-y-3 duration-150 rounded-xl" />
        <p className="flex justify-around font-bold">Satin Wrap Party <br /> Blouse<span>$80</span></p>
              <div className=" absolute lg:right-4 right-2 top-2  text-white z-10">
  <IoMdHeartEmpty className='bg-black opacity-40 rounded-full p-2 text-4xl '/><RiShoppingBasket2Line className='bg-black opacity-40 rounded-full p-2 text-4xl mt-1'/></div>
  <div className="parentt relative ">
  <h1 className=' absolute lg:-top-[21rem] -top-[18rem] lg:left-5 bg-white rounded-xl px-2 font-semibold text-sm z-10'>Get 20% off</h1></div>
    <h1 className='title rounded-3xl border-4 border-white text-sm px-5 py-2 '>QUICK VIEW</h1>
  </div>
  <div className="parentt rounded-2xl p-1 text-center relative">
    <img src={curly} alt="All Product 1" className="lg:h-[19rem] h-[16rem] lg:w-[40rem] hover:-translate-y-3 duration-150 rounded-xl" />
        <p className="flex justify-around font-bold">Satin Wrap Party <br /> Blouse<span>$80</span></p>
              <div className=" absolute lg:right-4 right-2 top-2  text-white z-10">
  <IoMdHeartEmpty className='bg-black opacity-40 rounded-full p-2 text-4xl '/><RiShoppingBasket2Line className='bg-black opacity-40 rounded-full p-2 text-4xl mt-1'/></div>
  <div className="parentt relative ">
  <h1 className=' absolute lg:-top-[21rem] -top-[18rem] lg:left-5 bg-white rounded-xl px-2 font-semibold text-sm z-10'>Get 20% off</h1></div>
    <h1 className='title rounded-3xl border-4 border-white text-sm px-5 py-2 '>QUICK VIEW</h1>
  </div>
  <div className="parentt rounded-2xl p-1 text-center relative">
    <img src={classic} alt="All Product 1" className="lg:h-[19rem] h-[16rem] lg:w-[40rem] hover:-translate-y-3 duration-150 rounded-xl" />
        <p className="flex justify-around font-bold">Satin Wrap Party <br /> Blouse<span>$80</span></p>
              <div className=" absolute lg:right-4 right-2 top-2  text-white z-10">
  <IoMdHeartEmpty className='bg-black opacity-40 rounded-full p-2 text-4xl '/><RiShoppingBasket2Line className='bg-black opacity-40 rounded-full p-2 text-4xl mt-1'/></div>
  <div className="parentt relative ">
  <h1 className=' absolute lg:-top-[21rem] -top-[18rem] lg:left-5 bg-white rounded-xl px-2 font-semibold text-sm z-10'>Get 20% off</h1></div>
    <h1 className='title rounded-3xl border-4 border-white text-sm px-5 py-2 '>QUICK VIEW</h1>
  </div>

   </>
 )}
</div>
    )}        
        </div>
      )}