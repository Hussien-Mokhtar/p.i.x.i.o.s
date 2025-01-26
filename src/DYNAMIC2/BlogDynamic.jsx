import { LazyLoadImage } from "react-lazy-load-image-component";

export default function BlogDynamic({blogA}) {
  return (
    <>
<div className="relative group overflow-hidden rounded-3xl">
  <LazyLoadImage src={blogA.img} alt="" className="rounded-3xl"/>
  <div className="bg-black absolute text-white left-0 bottom-0 font-bold rounded-se-3xl rounded-bl-2xl">
    <h1 className="bg-white text-black w-[8rem] p-2 mx-2 my-2 rounded-xl text-center text-sm">
      {blogA.date}
    </h1>
    <h1 className="w-[25rem] text-3xl p-4">{blogA.title}</h1>
  </div>
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300">
    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white to-transparent scale-50 group-hover:animate-[shimmer_1s_linear]"></div>
  </div>
</div>
    </>
  )
}
