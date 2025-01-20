export default function HomeGDynamic({HomeG}) {
  return (
    <>
      <div className="px-4 mx-4 pt-8 relative font-semibold text-sm" data-aos="fade-right" data-aos-duration="1500">
        <img src={HomeG.img} alt="" className='lg:h-[15rem] lg:w-[16rem] rounded-xl hover:scale-110 duration-150'/>

        <div className="absolute left-8 bottom-10 bg-white border border-black px-2 py-2 rounded-xl">
        <h1 className='flex justify-between text-green-600'>{HomeG.title} <span className='text-black font-bold'>{HomeG.price1}</span></h1>
        <h1 className='flex justify-between gap-2 pt-1'>{HomeG.name} <span><del className='text-gray-400'>{HomeG.price2}</del></span></h1>

        </div>
      </div>
    </>
  )
}
 