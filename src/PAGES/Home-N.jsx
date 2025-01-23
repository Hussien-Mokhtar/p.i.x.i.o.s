import { MdKeyboardArrowRight } from "react-icons/md";
import n1 from "../assets/n1.jpg"
import n2 from "../assets/n2.jpg"
import n3 from "../assets/n3.jpg"
import n4 from "../assets/n4.jpg"
import n5 from "../assets/n5.jpg"
import { useRef } from "react"
import Slider from "react-slick";
import HomeNDynamic from "../DYNAMIC/HomeNDynamic";
export default function HomeN() {
        let sliderRef = useRef(null); 
        const settings = {
            infinite: true,
            slidesToShow: 2.2,
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
    
      const slideHomeN = [
       {id:1 , img:n1, date:"17 MAY 2025", title:"Style Diaries: A Week in fashion  ", },
       {id:2 , img:n2 ,date:"28 FEB 2025", title:"Chic & Uniqe: Personalized Fashion findes", },
       {id:3 , img:n3,date:"15 AUG 2025", title:"Dress to Impress: Elevate Your Everyday Style",},
       {id:4 , img:n4,date:"28 NOV 2025", title:"Street Style Safari: Global Fashion Influnces",},
       {id:5 , img:n5,date:"10 OCT 2025", title:"Fashion & Beauty Fusion: The Ultimate Style Guide", },
    ]
  return (
    <>
    <div className="pt-10" >
    <h1 className='flex lg:px-8 px-4 justify-between py-4 lg:text-3xl text-xl font-bold'>Discover the most trending <br /> Post in Pixio. <span className="flex gap-1 hover:scale-105 cursor-pointer font-normal text-xl">See All <MdKeyboardArrowRight className="mt-1 text-xl "/> </span></h1>
    </div>

    <Slider ref={slider => (sliderRef = slider)} {...settings} className="py-4 " >
        {slideHomeN.map((hN)=>{
           return <HomeNDynamic key={hN.id} HomeN={hN} />
        })}
      </Slider>


    </>
    )
}