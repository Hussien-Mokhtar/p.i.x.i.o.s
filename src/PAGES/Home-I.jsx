import { useRef } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import shirt1 from "../assets/shirt1.png"
import shirt2 from "../assets/shirt2.png"
import shirt3 from "../assets/shirt3.png"
import shirt4 from "../assets/shirt4.png"
import Slider from "react-slick";
import HomeIDynamic from "../DYNAMIC/HomeIDynamic";
export default function HomeI() {
            let sliderRef = useRef(null); 
        const settings = {
            infinite: true,
            slidesToShow: 4,
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
              const SlideHomeI = [
      {id:1 , img:shirt1, title:"Up to 79% off" , name:"Checkerd Slim Coller Casual Shirt",price1:"$80", price2:"$95"},
    {id:2 , img:shirt2, title:"Up to 79% off" , name:"Printed Spread Coller Casual Shirt",price1:"$80", price2:"$95"},
     {id:3 , img:shirt3, title:"Up to 79% off" , name:"Solid Cut Away Coller Casual Shirt",price1:"$80", price2:"$95"},
     {id:4 , img:shirt4, title:"Up to 79% off" , name:"Checkerd Slim Coller Casual Shirt",price1:"$80", price2:"$95"},
            ]
    
  return (
    <>
      <div className="py-8">
        <h1 className='flex lg:px-8 px-4 justify-between py-2 lg:text-4xl text-sm font-bold'>Blockbuster deals <span className="flex gap-1 hover:scale-105 cursor-pointer font-normal text-lg lg:mt-2">See All <MdKeyboardArrowRight className="mt-1 text-xl "/> </span></h1>
      </div>

      <div className="">
      <Slider ref={slider => (sliderRef = slider)} {...settings} className="py-4 ">
        {SlideHomeI.map((hI)=>{
           return <HomeIDynamic key={hI.id} HomeI={hI} />
        })}
      </Slider>

      </div>
    </>
  )
}
