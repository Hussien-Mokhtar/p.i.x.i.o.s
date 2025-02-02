import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AboutUsA() {
  const [itemSale, setItemSale] = useState(0);

  useEffect(() => {
    let target = 50;
    let interval = 50; 
    const timer = setInterval(() => {
      setItemSale((prev) => {
        if (prev < target) {
          return prev + 1;
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:mx-20 mx-5 pt-36 w-full">
      <div>
        <h1 className="lg:text-4xl text-xl font-bold py-4">
          Your Fashion Journey Starts Here <br /> Discover Style at Pixio
        </h1>
        <h2 className="font-semibold"> <Link to="/">Home</Link> - About Us</h2>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 ">
        <div className="flex lg:justify-between justify-around items-center text-center ">
          <h1 className="lg:text-6xl text-3xl font-bold">{itemSale}+ <br /><span className="text-sm font-medium">Item Sale</span>   
          </h1>
  <h1 className="lg:text-6xl text-3xl font-bold"> 400% <br /><span className="text-sm font-medium ">Return on investment</span>
          </h1>
        </div>
      </div>
    </div>
    <div className="mx-auto py-10 relative">
<video  autoPlay muted loop 
         className="w-full rounded-2xl ">
        <source src="/src/assets/bg-video.mp4" type="video/mp4"/>
      </video>   
      <div className=" absolute lg:right-28 right-1 lg:-bottom-2 -bottom-10 bg-black text-white p-4 rounded-2xl lg:w-[30rem] w-[18rem] lg:h-[13rem] h-[10rem]">
        <h1 className="lg:text-2xl text-sm font-bold">why Pixio ?</h1>
        <h2>It is a long established fact that a reader will be distracted by the  readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use</h2>
      </div>
      </div>

    </>
  );
}
    
