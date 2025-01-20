import React from 'react'

export default function HomeJDynamic({HomeJ}) {
  return (
    <>
          <div className="pt-8 lg:px-2 px-2 relative">
<div className="font-semibold lg:text-sm text-xl rounded-lg"data-aos="fade-right" data-aos-duration="1500">
<div> <img src={HomeJ.img} alt="" className="rounded-2xl h-[25rem] w-full duration-500 lg:mt-3 mt-2 "/></div>

<div className=" absolute lg:right-24 right-10 top-20 ">
  <h1 className='font-bold bg-white p-1 px-4 lg:w-full w-36 text-center'>{HomeJ.title1}</h1>
  <h1 className='lg:text-6xl text-4xl w-10 font-bold'>{HomeJ.title}</h1>
  <h1 className='lg:text-4xl text-2xl w-10 py-2'>{HomeJ.title2}</h1>
  <h1 className='text-6xl font-bold'>{HomeJ.title3}</h1>

  <button className='text-base border border-black py-2 px-6 rounded-full mt-4 font-semibold hover:bg-black hover:text-white hover:scale-110 duration-150 '>Collect Now</button>
</div>
</div>
  </div>

    </>
  )
}