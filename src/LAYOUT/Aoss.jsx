import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Aoss = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <div className=""></div>;
};

export default Aoss;
