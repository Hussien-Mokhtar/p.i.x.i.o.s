
export default function HomeMDynamic({HomeM}) {
  return (
    <>
<div className="mx-4 py-8 relative" data-aos="fade-up" data-aos-duration="1500">
    <img src={HomeM.img} alt="" className=" rounded-3xl w-[20rem] "/>
    <img src={HomeM.logo} alt="" className="absolute left-0 bottom-[5.5rem] lg:h-[11rem] h-[13rem] w-[20rem] bg-black bg-opacity-20 rounded-3xl p-16 hover:scale-110 duration-150"/>

    <div className="flex lg:justify-between justify-around my-4">
        <h1 className="font-bold">{HomeM.title1}</h1>
        <h1 className="text-blue-700">{HomeM.title2}</h1>
    </div>

</div>
    </>
  )
}
