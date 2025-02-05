import React from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import { RiShoppingBasket2Line } from 'react-icons/ri'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
export default function HomeDDDynamic({HomeDD}) {
  return (
    <>
              <Link to={`/shopdetails/${HomeDD.id}`}> 
          <div className="parentt rounded-2xl p-1 text-center relative">
          <LazyLoadImage src={HomeDD.img} alt="All Product 1" className="lg:h-[19rem] h-[16rem] lg:w-[40rem] hover:-translate-y-3 duration-150 rounded-xl" />
              <p className="flex justify-around font-bold lg:w-52 py-2">{HomeDD.title}<span>{HomeDD.price}</span></p>
                    <div className=" absolute lg:right-4 right-2 top-2  text-white z-10">
        <IoMdHeartEmpty className='bg-black opacity-40 rounded-full p-2 text-4xl cursor-pointer '/><RiShoppingBasket2Line className='bg-black opacity-40 rounded-full p-2 text-4xl cursor-pointer mt-1'/></div>
        <div className="relative ">
        <h1 className=' absolute lg:-top-[21rem] -top-[19rem] lg:left-5 bg-white rounded-xl px-2 font-semibold text-sm z-10'>Get 20% off</h1></div>
        <h1 className='title rounded-3xl border-4 border-white text-sm px-5 py-2 cursor-pointer hover:bg-white hover:text-black font-bold hover:border-4 hover:border-black lg:ml-0 -ml-4 lg:my-0 my-4 '>QUICK VIEW</h1>
        </div>

        </Link>
        







        </>
  )
}
