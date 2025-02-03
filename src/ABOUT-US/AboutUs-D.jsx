import about3 from "../assets/about3.jpg"
import about4 from "../assets/about4.jpg"
import about5 from "../assets/about5.jpg"
import about6 from "../assets/about6.jpg"
import AboutUsDDynamic from "../DYNAMIC2/AboutUsDDynamic"
export default function AboutUsD() {
    const AboutD = [
        {id:1 , img:about3 , title1:"Macauley Herring" , title2:"Customer Success"},
        {id:1 , img:about4 , title1:"Alya Levine" , title2:"CTO"},
        {id:1 , img:about5 , title1:"Rose Hernandez" , title2:"Backend Developer"},
        {id:1 , img:about6 , title1:"Elen Benitez" , title2:"Designer"},

    ]
  return (
    <>
            <div className="grid lg:grid-cols-4 grid-cols-1 text-center gap-8">
{
 AboutD.map((ad)=>{
return <AboutUsDDynamic key={ad.id} AboutUsD={ad}/>
 })
}
        </div>       
    
    </>

  )
}
