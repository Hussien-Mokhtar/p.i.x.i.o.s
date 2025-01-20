import checkgirl from "../assets/checkgirl.png"
import woo from "../assets/woogirl-1.png"
import waad from "../assets/waad2.png"
import blue from "../assets/blue.png"
import HomeGDynamic from "../DYNAMIC/HomeGDynamic"
import happy from "../assets/happyG.jpg"
export default function HomeG() {
    const G = [
      {id:1 , img:woo, title:"up to 79% off" , name:"Cozy Knit Cardigan Sweater",price1:"$80", price2:"$95"},
      {id:2 , img:waad, title:"Free Delivery" , name:"Sophisticated Swagger Suit",price1:"$80", price2:"$95"},
      {id:3 , img:blue, title:"Free Delivery" , name:"Classic Denim Skinny Jeans",price1:"$80", price2:"$95"},
      {id:3 , img:checkgirl, title:"up to 79% off" , name:"Classic Denim Skinny Jeans",price1:"$80", price2:"95$"},]
    

  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12">

        <div className="grid lg:grid-cols-2 grid-cols-1">
            
        { G.map((hg)=>{
                return <HomeGDynamic key={hg.id} HomeG={hg} />
            })}
        </div>
        <div className="clip2 relative" data-aos="fade-left" data-aos-duration="1500">
            <img src={happy} alt="" className="lg:pt-0 pt-10"/>
            <h1 className=" absolute left-[5rem] lg:bottom-[20rem] bottom-[16rem] lg:text-6xl text-3xl text-center text-white font-bold">Great Saving On <br /> Everyday Essentials</h1>
            <h1 className=" absolute lg:left-[12rem] left-[5rem] lg:bottom-[17rem] bottom-[14rem] text-white font-semibold">Up to 60% off + up to $107 Cashback</h1>

            <button className=" absolute lg:left-[17rem] left-[10rem] lg:bottom-[13rem] bottom-[10rem] bg-white font-semibold rounded-xl px-8 py-3 hover:bg-blue-600 hover:text-white duration-150">SEE ALL</button>
            <h1 className="webkit absolute lg:left-[8rem] left-[3rem] bottom-[3rem] lg:text-6xl text-5xl ">GREAT SAVING</h1>
        </div>
      </div>
    </>
  )
}
