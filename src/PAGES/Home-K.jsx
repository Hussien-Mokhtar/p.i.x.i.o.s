import woo from "../assets/woogirl-1.png"
import waad2 from "../assets/waad2.png"
import blue from "../assets/blue.png"
import { useRef } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";
import HomeKDynamic from "../DYNAMIC/HomeKDynamic";
export default function HomeK() {
                let sliderRef = useRef(null); 
            const settings = {
                infinite: true,
                slidesToShow: 2,
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

                  const SlideHomeK = [
          {id:1 , img:woo, name:"Checkerd Slim Coller Casual Shirt",title:"Up to 79% off",price1:"$80", price2:"$95"},
        {id:2 , img:waad2 , name:"Printed Spread Coller Casual Shirt",title:"Up to 79% off",price1:"$80", price2:"$95"},
         {id:3 , img:blue, name:"Solid Cut Away Coller Casual Shirt",title:"Up to 79% off",price1:"$80", price2:"$95"},
                ]
  return (
    <>
            <div className="py-8">
        <h1 className='flex lg:px-8 px-4 justify-between py-2 lg:text-4xl text-sm font-bold'>Featured now <span className="flex gap-1 hover:scale-105 cursor-pointer font-normal text-lg lg:mt-2">See All <MdKeyboardArrowRight className="mt-1 text-xl "/> </span></h1>
      </div>

      <div className="">
      <Slider ref={slider => (sliderRef = slider)} {...settings} className="py-4 ">
        {SlideHomeK.map((hK)=>{
           return <HomeKDynamic key={hK.id} HomeK={hK} />
        })}
      </Slider>

      </div>

    </>
  )
}
