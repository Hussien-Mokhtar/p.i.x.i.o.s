import pic3 from "../assets/pic3.jpg"
import { MdArrowRightAlt } from "react-icons/md";
import woo from "../assets/woogirl-1.png"
import waad from "../assets/waad2.png"
import blue from "../assets/blue.png"
import HomeFDynamic from "../DYNAMIC/HomeFDynamic";
export default function HomeF() {
    const pic =[
        {id:1 , img:woo, title:"up to 79% off" , name:"Cozy Knit Cardigan Sweater",price1:"$80", price2:"$95"},
        {id:2 , img:waad, title:"up to 79% off" , name:"Sophisticated Swagger Suit",price1:"$80", price2:"$95"},
        {id:3 , img:blue, title:"up to 79% off" , name:"Classic Denim Skinny Jeans",price1:"$80", price2:"$95"},
    ]
  return (
    <>
      <div className=" mx-4 px-4 grid lg:grid-cols-2 grid-cols-1">
        <div className="" data-aos="fade-right" data-aos-duration="1500">
            <img src={pic3} alt="" className="rounded-t-full hover:-translate-y-4 duration-150"/>
        </div>
        <div className="pt-6">
        <div className="flex justify-between ">
            <h1 className="lg:text-4xl text-xl font-bold ">Users Who Viewed This <br /> Also Checked Out These <br /> Similar Profiles</h1>
            <MdArrowRightAlt className=" lg:text-8xl text-7xl border-2 border-dotted border-black rounded-full p-2 hover:scale-110 duration-150 hover:text-blue-600"/>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 pt-8 gap-6">
      {pic.map((hf)=>{
           return <HomeFDynamic key={hf.id} HomeF={hf} />
        })}

</div> 
        </div>
        
      </div>
    </>
  )
}
