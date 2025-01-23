import ArrowIcon from "../PAGES/ArrowIcon";

export default function HomeNDynamic({HomeN}) {
  return (
    <>
<div className="relative">
  <div className=" group lg:w-[34rem] w-[25rem] lg:h-[35rem] h-[26rem] rounded-3xl overflow-hidden lg:px-0 px-4">
    <img src={HomeN.img} alt="" className=" object-cover rounded-3xl" />
    
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent 
      opacity-0 group-hover:opacity-100 transition-opacity duration-100 animate-shimmer"></div>
  </div>
  <h1 className="absolute left-10 top-10 bg-white rounded-lg p-1 px-2 font-semibold">{HomeN.date}</h1>
  <div>

     <h1 className="absolute left-10 bottom-10 text-white font-bold lg:text-2xl text-xl lg:w-[25rem] w-[21rem] flex ">{HomeN.title} <span> <ArrowIcon/></span></h1>
  </div>
</div>
    </>
  )
}
