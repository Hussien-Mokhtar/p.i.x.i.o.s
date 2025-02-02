import { LazyLoadImage } from 'react-lazy-load-image-component'
import men from "../assets/men.png"
import test from "../assets/testimonial4.jpg"
export default function AboutUsB() {
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 my-8 px-10 gap-20 ">
        <div className="group relative">
            <LazyLoadImage src={men} alt="" className='rounded-2xl '/>
            <div className="absolute inset-0  bg-gradient-to-r from-transparent via-white/30 to-transparent 
      opacity-0 group-hover:opacity-80 transition-opacity duration-100 animate-shimmer"></div>

        </div>
        <div className="">
            <h1 className='text-3xl font-bold my-6'>Elevate Your Style: A Unique <br /> Fashion Experience at Pixio</h1>
            <h2 className='text-sm'>At Untouch, we're dedicated to creating an exclusive fashion destination that <br /> transcends the ordinary. Our passion for style, quality, and individuality drives our <br /> mission. Our collection is a carefully curated blend of timeless classics and the latest trends, <br /><br />
In addition to our extensive collection, we're equally devoted to ensuring your <br /> shopping experience is seamless and enjoyable. Our website is designed with your <br /> convenience in mind, offering secure transactions and a responsive customer support team to assist you every step of the way.</h2>

<div className="grid lg:grid-cols-2 grid-cols-1 my-16">
            <div className="">
                <LazyLoadImage src={test} alt="" className='w-20 rounded-full hover:scale-110 duration-150'/>
            </div>
            <div className="lg:-ml-40 lg:mt-4 text-xl font-bold"><h1 className=''>Kenneth Fong </h1>
            <h2 className='text-gray-400 text-sm'>Ceo and founder</h2>
            </div>
        </div>
        </div>
      </div>

<div className="bg-black text-white w-full p-8 flex justify-center gap-5"> <h1 className='text-xl font-bold'>Questions ?</h1>  Our experts will help find the grar that’s right for you
<button className='bg-white text-black rounded-md px-6 py-1 font-semibold hover:bg-blue-600 hover:text-white hover:scale-110 duration-150'>Get In Touch</button>

</div>
    </>
  )
}
