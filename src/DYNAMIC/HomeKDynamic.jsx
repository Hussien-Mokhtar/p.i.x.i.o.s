
export default function HomeKDynamic({HomeK}) {
  return (
    <>
    <div className=" lg:px-2 mx-4 flex items-center border border-black rounded-2xl mb-10 shadow-lg" data-aos="fade-left" data-aos-duration="1500">
    <div className="">
    <img src={HomeK.img} alt="img" className="w-[12rem] lg:h-[12rem] h-[10rem] rounded-3xl p-4"/>
    </div>        
        <div className="">
        <h1 className="font-bold lg:text-xl text-sm">{HomeK.name}</h1>
        <h1 className="font-bold text-blue-600 py-2">{HomeK.title}</h1>
        <h1 className="font-bold lg:text-xl text-sm">{HomeK.price1} <span><del className="font-normal text-sm text-gray-500">{HomeK.price2}</del> <span className="font-normal text-sm text-gray-500">(2k Review)</span></span></h1>

        </div>
  </div>
    </>
  )}