import pink from "../assets/pink.png"
import children from "../assets/children.png"
import boy from "../assets/boy.png"
import { GoArrowUpRight } from "react-icons/go";
export default function HomeC() {
  return (
    <>
      <div className="container lg:mx-10 grid lg:grid-cols-2 grid-cols-1 text-center ">
        <div className="clipp relative" data-aos="fade-right" data-aos-duration="1500">
          <img src={pink} alt="" /> <span className=" text-black absolute bottom-10 left-16 font-bold text-2xl border border-black bg-white rounded-md p-2 hover:bg-black hover:text-white duration-150 ">Woman Collection</span></div>
        
        <div className="container text-left "data-aos="fade-left" data-aos-duration="1500">
        <div className="flex justify-around px-8 py-4">
          <h1 className="font-bold text-4xl">Set your wardrobe with <br /> our amazing selection!</h1><span className=" w-10 h-10 "><GoArrowUpRight className="text-7xl text-white p-3 bg-black rounded-full lg:ml-10 hover:bg-blue-600 duration-150"/></span>
          </div>
          <div className="font-semibold lg:ml-10 ml-6 text-gray-700"><h1>Lorem Ipsum is simply dummy text of the printing <br /> and typesetting industry. Lorem Ipsum has been the <br /> industry's standard dummy text ever since the</h1></div>

          <div className="grid lg:grid-cols-2 grid-cols-1 py-4 lg:gap-20 gap-6 ml-10">
            <div className="relative w-[16rem]"><img src={children} alt="" className="rounded-xl hover:scale-110 duration-150 "/> <span className="absolute left-10 bottom-10 bg-white border border-black rounded-md px-4 py-1 font-semibold hover:bg-black hover:text-white duration-150">Child Fashion</span></div>

            <div className=" relative w-[16rem]"><img src={boy} alt="" className="rounded-xl hover:scale-110 duration-150"/><span className="absolute left-8 bottom-5 bg-white border border-black rounded-md px-4 py-1 font-semibold hover:bg-black hover:text-white duration-150">Man collection</span></div>
          </div>

        </div>
      </div>
      <div className="border border-black mt-6">
      <marquee behavior="alternate" direction="left" ><h1 className="lg:py-6 lg:text-6xl text-3xl">JEANS  ✦  T-SHIRT  ✦  SHORTS  ✦  SHIRTS ✦  JACKET  ✦ BLAZER ✦ JEANS ✦ T-SHIRT ✦ SHORTS✦ SHIRTS  ✦  JACKET  ✦  BLAZER  ✦  JEANS  ✦  T-SHIRT ✦ SHORTS  ✦  SHIRTS  ✦  JACKET  ✦  BLAZER  ✦  JEANS  ✦  T-SHIRT  ✦  SHORTS✦ SHIRTS  ✦  JACKET  ✦  BLAZER  ✦ </h1></marquee>

      </div>
    </>
  )
}
