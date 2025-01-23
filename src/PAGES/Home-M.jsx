import a from "../assets/a.jpg"
import a1 from "../assets/a1.png"
import b from "../assets/b.jpg"
import b2 from "../assets/b2.png"
import d from "../assets/d.jpg"
import d2 from "../assets/d2.png"
import c1 from "../assets/c1.png"
import Slider from "react-slick"
import HomeMDynamic from "../DYNAMIC/HomeMDynamic"
import { useRef } from "react"
import { MdKeyboardArrowRight } from "react-icons/md";

export default function HomeM() {
    let sliderRef = useRef(null); 
    const settings = {
        infinite: true,
        slidesToShow: 4.3,
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
  
            const slideHomeM = [
              {id:1 , img:a, logo:a1 , title1:"Outdoor Shoes ",title2:"Min. 30% Off", },
              {id:2 , img:b, logo:b2 , title1:"Best Clothes",title2:"Up To 20% Off", },
              {id:3 , img:a, logo:c1, title1:"Sports Shoes",title2:"Up To 20% Off",},
              {id:4 , img:d, logo:d2 , title1:"Modern Jewellery",title2:"Min. 30% Off", },]
  return (
    <>
    <div className="pt-10" >
    <h1 className='flex lg:px-8 px-4 justify-between pt-4 lg:text-4xl text-xl font-bold'>Sponsored <span className="flex gap-1 hover:scale-105 cursor-pointer font-normal text-xl">See All <MdKeyboardArrowRight className="mt-1 text-xl "/> </span></h1>
    </div>
                    
           <Slider ref={slider => (sliderRef = slider)} {...settings} className="py-4 " >
        {slideHomeM.map((hM)=>{
           return <HomeMDynamic key={hM.id} HomeM={hM} />
        })}
      </Slider>
    </>
  )
}
