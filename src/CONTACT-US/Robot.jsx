import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
const NotARobot = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg shadow-md w-fit bg-white mb-6">
      <button
        onClick={handleCheck}
        className={`w-6 h-6 flex items-center justify-center border-2 rounded-md ${
          isChecked ? "bg-green-500 border-green-500" : "border-gray-300"
        } transition-colors`}
      >
        {isChecked && <FaCheck size={18} className="text-white" />}
      </button>
      <p className="text-gray-700 text-sm font-medium">I'm not a robot</p>
      <LazyLoadImage src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="Google reCAPTCHA"
        className="w-10 h-10"/>
    </div>
  );
};
export default NotARobot;