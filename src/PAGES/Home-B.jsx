import React, { useRef } from "react";
import Slider from "react-slick";
import amis from "../assets/amis.png"
import shorts from "../assets/shorts.png"
import tshirt from "../assets/tshirt.png"
import jeans from "../assets/jeans.png"
import HomeBDynamic from "../DYNAMIC/HomeBDynamic";
import HomeB2 from "./Home-B2";

export default function HomeB() {
    let sliderRef = useRef(null); 
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
  const SlideHomeB = [
    {id:1, img:amis , name:"Shirts",},{id:2, img:shorts , name:"Shorts",},{id:1, img:tshirt , name:"t-Shirt",} ,{id:1, img:jeans , name:"Jeans",}
]
  return (
    <>
    <div className=" grid lg:grid-cols-12 grid-cols-1 py-10">
        <div className="bg-blue-500 h-[20rem]  col-span-8 grid lg:grid-cols-2 grid-1">
        <Slider ref={slider => (sliderRef = slider)} {...settings} className="lg:w-[45rem] w-[20rem]
         lg:h-[20rem] lg:py-10 py-5 ml-[4rem]">
        {SlideHomeB.map((hB)=>{
           return <HomeBDynamic key={hB.id} HomeB={hB} />
        })}
      </Slider>


        </div>
        <div className="bg-black text-white col-span-4 "><HomeB2/></div>
      </div>

    </>
  )
}
