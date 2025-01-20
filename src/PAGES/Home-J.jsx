import { MdKeyboardArrowRight } from "react-icons/md";
import { useRef } from "react";
import lanj1 from "../assets/lanj1.png"
import lanj2 from "../assets/lanj2.png"
import lanj3 from "../assets/lanj3.png"
import Slider from "react-slick";
import HomeJDynamic from "../DYNAMIC/HomeJDynamic";

export default function HomeJ() {
                let sliderRef = useRef(null); 
  const settings = {
      infinite: true,
      slidesToShow: 2.3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [{
 breakpoint: 1024,
 settings: {
   slidesToShow: 3,
   slidesToScroll: 3,
   infinite: true,
   dots: true,
 },},
          {
 breakpoint: 600,
 settings: {
   slidesToShow: 2,
   slidesToScroll: 2,
   initialSlide: 2,
 },},
          {
 breakpoint: 480,
 settings: {
   slidesToShow: 1,
   slidesToScroll: 1,
 },},],
          }
    const SlideHomeJ = [
    {id:1 , img:lanj1,title1:"20% OFF",title:"LUXURY ",title3:"BRAS" },
  {id:2 , img:lanj2, title1:"SALE UP TO 50% OFF ",title2:"SUMMER ",title3:"2024" },
   {id:3 , img:lanj3, title1:"20% OFF",title2:"SWIMWEAR ",title3:"SALE" },
        ]
  return (
    <>
    <div className="pt-10">
    <h1 className='flex lg:px-8 px-4 justify-between pt-4 lg:text-4xl text-xl font-bold'>Featured offer for you <span className="flex gap-1 hover:scale-105 cursor-pointer font-normal text-xl">See All <MdKeyboardArrowRight className="mt-1 text-xl "/> </span></h1>
    </div>
    <div className="">
      <Slider ref={slider => (sliderRef = slider)} {...settings} className="py-4 ">
        {SlideHomeJ.map((hJ)=>{
           return <HomeJDynamic key={hJ.id} HomeJ={hJ} />
        })}
      </Slider>
      </div>
    </>
  )
}
