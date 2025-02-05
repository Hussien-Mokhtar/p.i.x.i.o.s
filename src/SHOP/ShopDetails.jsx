import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import TimerCounter from '../LAYOUT/TimerCount';
import MidNav from "../LAYOUT/MidNav";
import woo from "../assets/woogirl-1.png";
import waad2 from "../assets/waad2.png";
import blue from "../assets/blue.png";
import check from "../assets/checkgirl.png";
import pink from "../assets/pink.png";
import carizma from "../assets/carizma.png"
import classic from "../assets/classic.png"
import curly from "../assets/curlygirl.png"
import harry from "../assets/harry.png"
import purple from "../assets/purple.png"
import smile from "../assets/smile.png"
import red from "../assets/red.png"
import { LazyLoadImage } from "react-lazy-load-image-component";
import Footer1 from "../LAYOUT/Footer";
import Products from "./Product";
import ArrowTop from "../LAYOUT/ArrowTop";

    const shopDet = [
    {id:1, img:woo , },{id:2, img:waad2  }, {id:3, img:blue  },  {id:4, img:check },  {id:5, img:pink , },  {id:6, img:carizma  },  {id:7, img:classic  },  {id:8, img:curly },  {id:9, img:harry  },  {id:10, img:purple },  {id:11, img:smile },  {id:12, img:red },
    ]
export default function ShopDetails() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  useEffect(() => {
    const foundProduct = shopDet.find((item) => item.id === parseInt(id));
    setProduct(foundProduct); 
  }, [id]);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);
  if (!product) {
    return <div className="text-center text-blue-700 mt-10">⚠️ Products not found</div>;
  }
  return (
    <>
      <MidNav />
      <div key={product.id}>
        <div className="container mx-auto px-4 grid lg:grid-cols-3 grid-cols-1 w-full mt-[8rem]" >
          <div className="lg:col-span-1" data-aos="fade-right" data-aos-duration="1000">
            <div className="slider-container w-[100%]" data-aos="fade-right" data-aos-duration="2500">
              <Slider asNavFor={nav2} ref={sliderRef1}>
                {[...Array(6)].map((_, index) => (
                  <div key={index}>
                    <h3>
       <LazyLoadImage src={product.img} alt="zoom-img" className="w-full h-[35rem] py-10 duration-200 cursor-zoom-in hover:scale-110 "/> </h3>
                  </div> ))}
              </Slider>

              <Slider
                asNavFor={nav1}ref={sliderRef2} slidesToShow={5}
                swipeToSlide={true}
                focusOnSelect={true}
                className="cursor-pointer">
                {[...Array(6)].map((_, index) => (
                  <div key={index}>
                    <h3>
                      <LazyLoadImage src={product.img} alt="zoom-img" className="px-2 " />
                    </h3>
                  </div> ))}
              </Slider>
            </div>
          </div>
          <div className="w-full lg:col-span-2" data-aos="fade-left" data-aos-duration="1000">
            <div className="w-full py-8 px-20">
              <h5 className="lg:text-2xl text-sm py-4 font-bold">{product.name}</h5>
              <h5 className="lg:flex lg:ml-0 ml-[-4rem]">
                <span className="pt-2 px-4 text-xl hidden sm:block"></span>
                <span className="pt-2 text-blue-600 font-bold lg:text-xl text-sm lg:-ml-8 ml-16">
                  22 sold in last 2 hours...
                </span>
              </h5>
              <h1 className="text-blue-700 lg:text-5xl text-4xl font-bold py-5">{product.price}</h1>
              <h5 className="py-4 lg:text-xl text-sm font-semibold">
                Availability:{" "}
                <span className="text-gray-400">
                  <input type="radio" className="text-green-500" defaultChecked /> {product.stock} in stock
                </span></h5>
              <hr />
              <p className="w-full py-6 text-sm font-semibold text-gray-400 leading-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                <br />
                industry dummy text and typesetting industry</p>
              <button
                className="bg-blue-600 text-white lg:text-[18px] text-[14px] font-bold py-4 lg:pl-2 lg:pr-20
              lg:flex-row flex">
                Hurry up! Sale ends in: <span className="w-full"> <TimerCounter /> </span>
              </button>
            </div>
            <Products />
          </div>
        </div>
      </div>
      <Footer1 />
      <ArrowTop/>
    </>
  );}