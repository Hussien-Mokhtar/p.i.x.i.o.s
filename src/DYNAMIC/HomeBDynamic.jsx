import { LazyLoadImage } from "react-lazy-load-image-component"
export default function HomeBDynamic({HomeB}) {
  return (
    <>
      <div className="container mx-4 px-4 "data-aos="fade-up" data-aos-duration="1500">
        <div className=""><LazyLoadImage src={HomeB.img} alt="img" className='h-[12rem] w-48 lg:ml-0 ml-8'/></div>

        <div className="py-2 my-4 lg:w-32 w-28 lg:ml-8 ml-16 font-bold flex justify-center bg-white rounded-2xl border border-black hover:bg-black hover:text-white duration-150 hover:scale-110 
        " >{HomeB.name} </div>
      </div>
    </>
  )
}
 