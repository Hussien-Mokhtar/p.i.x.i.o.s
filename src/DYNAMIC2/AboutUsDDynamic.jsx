import { LazyLoadImage } from "react-lazy-load-image-component";

export default function AboutUsDDynamic({AboutUsD}) {
  return (
    <>
               <div className="py-4 flex flex-col ">
        <LazyLoadImage src={AboutUsD.img} alt="" className="rounded-2xl"/>
        <h1 className="text-xl font-bold mt-4">{AboutUsD.title1}</h1>
        <h2 className="text-sm ">{AboutUsD.title2}</h2>
        </div>            

    </>
  )
}
