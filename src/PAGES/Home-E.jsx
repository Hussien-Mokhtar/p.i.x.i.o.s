import white from "../assets/summerwhite.png"
import yellow from "../assets/summeryellow.png"

export default function HomeE() {
  return (
    <>
    <div className="grid lg:grid-cols-2 grid-cols-1 py-10">
        <div className="relative" data-aos="fade-right" data-aos-duration="1500">
            <img src={white} alt="" />
            <div className=" absolute font-bold bg-white lg:p-16 p-6 border-[1.5px] text-center border-black rounded-full top-6 right-4 ">
                <h1 className="text-sm lg:mt-0 mt-4 ">SALE UP TO 50% OFF</h1>
                <h1 className=" lg:text-3xl text-xl mt-2">S U M M E R</h1>
                <h1 className=" lg:text-7xl text-2xl">2025</h1>
                <button className="border border-black lg:px-4 px-2 lg:py-2 py-1 rounded-lg mt-2 hover:bg-black hover:text-white duration-150 text-sm hover:scale-110">SHOP NOW</button>
            </div>
            <div className=" absolute right-7 top-6 bg-white lg:p-8 p-4 rounded-full border-[1.5px] border-black"></div>
            <div className=" absolute lg:right-60 right-40 top-6 bg-white lg:p-8 p-4 rounded-full border-[1.5px] border-black"></div>
        </div>

        <div className=" relative font-bold" data-aos="fade-left" data-aos-duration="1500">
            <img src={yellow} alt="" />
            <div className=" absolute lg:right-[12rem] right-[10rem] lg:top-20 top-10">
        <h1 className="text-base lg:mt-0 mt-4 ">SALE UP TO 50% OFF</h1>
        <h1 className="lg:text-6xl text-3xl">NEW SUMMER <br /> COLLECTION</h1>
        <button className=" bg-black text-white border border-black lg:px-4 px-2 py-2 rounded-lg mt-4 duration-150 text-sm hover:bg-white hover:text-black hover:scale-110">SHOP NOW</button>
        </div>
        </div>
    </div>
    </>
  )
}
