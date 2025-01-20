import { MdKeyboardArrowRight } from "react-icons/md";
import { useRef } from "react";
import Slider from "react-slick";
import woo from "../assets/woogirl-1.png"
import blue from "../assets/blue.png"
import waad2 from "../assets/waad2.png"
import checkgirl from "../assets/checkgirl.png"
import HomeHDynamic from "../DYNAMIC/HomeHDynamic";
export default function HomeH() {
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
          const SlideHomeH = [
            {id:1, img:woo , name:"Cardigan Sweater",title:"Up To 79% off"},{id:2, img:blue , name:"Swagger Suit",title:"Up To 79% off"},{id:1, img:waad2 , name:"Skinny Jeans",title:"Up To 79% off"} ,{id:1, img:checkgirl , name:"Sports Leggings",title:"Up To 79% off"}
        ]
      return (
    <>
      <div className="container px-4 py-6 lg:text-3xl text-xl font-bold"><h1>Discovering the Hottest Nearby Destinations in Your Area</h1></div>
        <h1 className='flex lg:px-8 px-4 justify-between py-2 lg:text-xl text-sm font-bold'>Up to 60% off + up to $107 Cashback <span className="flex gap-1 hover:scale-105 cursor-pointer font-normal">See All <MdKeyboardArrowRight className="mt-1 text-xl "/> </span></h1>

        <div className="" data-aos="fade-up" data-aos-duration="1500" >
        <Slider ref={slider => (sliderRef = slider)} {...settings} className="mt-4 ">
        {SlideHomeH.map((hH)=>{
           return <HomeHDynamic key={hH.id} HomeH={hH} />
        })}
      </Slider>

        </div>
    </>
  )
}
