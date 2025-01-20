
export default function HomeIDynamic({HomeI}) {
  return (
    <>
    <div className="pt-8 lg:px-6 px-4 shadow-xl">

    <div className="font-semibold lg:text-sm text-xl rounded-lg"data-aos="fade-left" data-aos-duration="1500">
    <div> <img src={HomeI.img} alt="" className="rounded-2xl h-[17rem] w-[16rem] hover:-translate-y-10 duration-500 lg:mt-3 mt-2 lg:ml-0 ml-[3rem]"/></div>
<div className=" flex lg:justify-around justify-evenly pt-5"><p className='text-blue-600 font-bold '>{HomeI.title} </p><span><div className="">{HomeI.price1} </div></span></div>

<div className="flex lg:justify-around justify-evenly ">
<h1 className='flex justify-evenly lg:w-48 w-56 '>{HomeI.name}<span><del className='text-gray-400'>{HomeI.price2}</del></span></h1>
  </div>
    </div>
      </div>
    </>
  )
}
