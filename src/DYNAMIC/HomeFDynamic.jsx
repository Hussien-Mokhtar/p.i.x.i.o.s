import { LazyLoadImage } from 'react-lazy-load-image-component'
export default function HomeFDynamic({HomeF}) {
  return (
    <>
    <div className="font-bold lg:text-sm text-xl"data-aos="fade-left" data-aos-duration="1500">
    <div><LazyLoadImage src={HomeF.img} alt="" className="rounded-2xl h-[15rem] w-[20rem] hover:scale-110 duration-150"/></div>
<div className=" flex lg:justify-around justify-evenly pt-3"><p className='text-blue-600 font-bold '>{HomeF.title} </p><span><div className="">{HomeF.price1} </div></span></div>

<div className="flex lg:justify-around justify-evenly">
<h1 className='flex justify-evenly lg:w-40 w-56 '>{HomeF.name} <span><del className='text-gray-400'>{HomeF.price2}</del></span></h1>
  </div>
    </div>
    </>
  )
}
