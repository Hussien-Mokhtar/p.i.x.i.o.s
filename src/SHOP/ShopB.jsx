import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import ShopBB from "./ShopBB";
export default function ShopB() {
  const [minPrice, setMinPrice] = useState(43);
  const [maxPrice, setMaxPrice] = useState(326);

  const handleMinChange = (event) => {
    const value = parseInt(event.target.value);
    if (value < maxPrice) setMinPrice(value);
 };
  const handleMaxChange = (event) => {
    const value = parseInt(event.target.value);
    if (value > minPrice) setMaxPrice(value);
  };
  return (
    <div className="p-6 bg-neutral-50 min-h-screen">
      <div className="flex items-center mb-4">
        <button className="text-xl mr-2"><HiOutlineAdjustmentsHorizontal/></button>
        <h2 className="text-lg font-semibold">Filter</h2>
      </div>

      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search Product"
          className="w-full p-3 pl-10 pr-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-400" />
        <span className="absolute top-3 right-4 text-gray-500 text-xl"><IoSearch/></span>
      </div>

      <div className="mb-6 ">
        <h3 className="text-lg font-semibold mb-2">Price</h3>
        <div className="relative mt-4 lg:w-full w-[22rem]">
          <div className="h-1 bg-red-500 rounded-full relative ">
            <div
              className="absolute bg-black h-1 rounded-full  "
              style={{
                left: `${100 + ((minPrice - 43) / (326 - 43)) * 100}%` ,
                right: `${100 - ((maxPrice - 43) / (326 - 43)) * 100}%`,
              }} />
          </div>
          <input
            type="range" min="43" max="326"
            value={minPrice}
            onChange={handleMinChange}
            className="absolute -top-3 w-full appearance-none pointer-events-auto " />
          <input type="range" min="43" max="326"
           value={maxPrice}
             onChange={handleMaxChange}
            className="absolute -top-3 w-full appearance-none pointer-events-auto"/>
          
        </div>
        <div className="flex lg:justify-between justify-around text-sm mt-2">
          <span>Min Price: ${minPrice}</span>
          <span>Max Price: ${maxPrice}</span>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Color</h3>
        <div className="flex gap-2">
          {["black", "dodgerblue", "green", "pink", "orange", "cyan", "purple", "red", "skyblue"].map(
            (color, index) => (
              <div
                key={index}
                className={`lg:w-[2rem] w-[2rem] lg:h-[1.5rem] h-[2rem] rounded-full border-2 cursor-pointer hover:scale-95 hover:border-black  ${
                  color === "black" ? "border-black" : "border-transparent"
                }`}
                style={{ backgroundColor: color }}
              />
            )
          )}
        </div>
      </div>
      <ShopBB/>
    </div>
  );
}
