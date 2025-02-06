import woo from "../assets/woogirl-1.png";
import waad2 from "../assets/waad2.png";
import blue from "../assets/blue.png";
import check from "../assets/checkgirl.png";
import pink from "../assets/pink.png";
import carizma from "../assets/carizma.png"
import classic from "../assets/classic.png"
import curly from "../assets/curlygirl.png"
import HomeDDDynamic from "../DYNAMIC/HomeDDDynamic";
import { Link } from "react-router-dom";
export default function HomeDD() {
        const HomeDDD = [
            {id:1, img:woo ,title:"Cozy Knit Cardigan Sweater", price:"$80" },
            {id:2, img:waad2 ,title:"Sophisticated Swagger Suit", price:"$75" },
            {id:3, img:blue ,title:"Classic Denim Skinny Jeans", price:"$96" },
            {id:4, img:check ,title:"Athletic Mesh Sportsbr Leggings", price:"$86" },
            {id:5, img:pink ,title:"Vintage Denim Overalls Shorts", price:"$60" },
            {id:6, img:carizma ,title:"Satin Wrap Party Blouse", price:"$72" },
            {id:7, img:classic ,title:"Plaid Wool Winter Coat Classic", price:"$60" },
            {id:8, img:curly ,title:"Water-Resistant Windbreaker Jacket", price:"$60" },
        ]
  
  return (
    <>
                     <Link to={`/shopdetails/${HomeDDD.id}`}>  

        <div className="mt-8 lg:-mx-9 mx-20 grid lg:grid-cols-4 grid-cols-1 lg:gap-6 gap-4 lg:w-[70rem] w-full ">
            <>
            { HomeDDD.map((hdd)=>{
            return <HomeDDDynamic key={hdd.id} HomeDD={hdd}/>
                })}
            </>
             </div>      
             </Link> 

    </>
  )
}
