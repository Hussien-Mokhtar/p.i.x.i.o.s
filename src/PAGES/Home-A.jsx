import React, { useState } from "react";
import { testData } from "../LAYOUT/Data";
import { FaStarOfLife } from "react-icons/fa";
import arrow from "../assets/rightarrow.png";
import { GiPolarStar } from "react-icons/gi";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function HomeA() {
  const [selected, setSelected] = useState(0);
  const tLength = testData.length;

  const textAnimation = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 },
  };
  return (
    <>
      <div className="container lg:mx-32 mx-6 lg:px-4 grid lg:grid-cols-2 grid-cols-1 lg:gap-60 pt-36">
        <motion.div className=""
          initial={{ opacity: 0, x: "-150%" }}
          animate={{ opacity: 1, x: "-2%" }}
          transition={{ duration: 1, ease: "easeOut" }} >
          <motion.span
            key={selected}
            {...textAnimation}
            className="lg:text-5xl font-bold py-4 " >
            {testData[selected].review}
          </motion.span>
          <span>
            <GiPolarStar className="animate text-blue-700 lg:ml-[28rem] ml-[10rem] lg:text-5xl text-3xl " />
          </span>

          <motion.div
            key={`price-${selected}`}
            {...textAnimation}
            className="py-4" >
            <span className="font-bold text-2xl">
              {testData[selected].price}
            </span>
          </motion.div>

          <motion.div
            key={`buttons-${selected}`}
            {...textAnimation}
            className="py-2 flex gap-5" >
            <span className="bg-black text-white rounded-md p-3 hover:bg-blue-600 duration-100">
              {testData[selected].button1}
            </span>
            <span className="border border-black rounded-md p-2 hover:bg-black hover:text-white duration-100">
              {testData[selected].button2}
            </span>
          </motion.div>

          <motion.div
            key={`footer-${selected}`}
            {...textAnimation}
            className="py-4 grid lg:grid-cols-3 grid-1 ml-4" >
            <FaStarOfLife className="lg:text-7xl text-4xl m-2" />
            <h5 className="font-medium lg:w-[20rem]">
              Summer Collection <br />
              <span className="font-bold text-2xl">
                TRENDY AND CLASSIC <br /> FOR THE NEW SEASON
              </span>
            </h5>
            <Link
              to="https://www.youtube.com/watch?v=YwYoyQ1JdpQ"
              target="blank" >
              <FaPlay className="text-6xl m-4 p-4 play lg:ml-[15rem] rounded-full" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: "150%" }}
          animate={{ opacity: 1, x: "5%" }}
          transition={{ duration: 1, ease: "easeOut" }} >
          <div>
            <motion.img
              key={selected}
              {...textAnimation}
              src={testData[selected].image} alt=""
              className="lg:w-96 w-80 lg:h-96 h-80 rounded-3xl py-2 -ml-4" />
          </div>

          <motion.div className="bg-white rounded-full lg:w-fit h-fit p-2 lg:ml-[-50px] ml-[-50px]"  initial={{ opacity: 0, x: "150%" }}
          animate={{ opacity: 1, x: "5%" }}
          transition={{ duration: 1, ease: "easeOut" }} >
            <LazyLoadImage
              onClick={() =>
                selected === tLength - 1
                  ? setSelected(0)
                  : setSelected((res) => res + 1)
              }
              src={arrow} alt="" className="bg-blue-600 rounded-full lg:p-3 p-2 "/>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}