
import { MdOutlineCelebration } from "react-icons/md";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Celebration = () => {
  const [confettiPieces, setConfettiPieces] = useState([]);

  useEffect(() => {
    // Generate confetti pieces with random properties
    const pieces = Array.from({ length: 120 }).map((_, index) => ({
      id: index,
      left: `${Math.random() * 100}vw`,
      size: `${Math.random() * 8 + 4}px`,
      color: `hsl(${Math.random() * 360}, 100%, 70%)`,
      animationDuration: `${Math.random() * 3 + 2}s`,
    }));
    setConfettiPieces(pieces);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center lg:h-[30rem] h-[20rem] bg-gradient-to-r from-yellow-100 via-pink-100 to-blue-100 overflow-hidden">
      {/* Title Section */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="flex items-center font-extrabold lg:text-6xl text-4xl text-yellow-600 drop-shadow-lg">
          <MdOutlineCelebration className="mx-2 animate-spin-slow text-red-500" />
          Congratulations!
          <MdOutlineCelebration className="mx-2 animate-spin-slow text-red-500" />
        </h1>
        <p className="mt-4 text-xl text-gray-600 font-medium">
          Your achievement deserves a grand celebration!
        </p>
      </motion.div>

      {/* Confetti Animation */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {confettiPieces.map(piece => (
          <motion.div
            key={piece.id}
            className="absolute rounded-full"
            style={{
              backgroundColor: piece.color,
              width: piece.size,
              height: piece.size,
              left: piece.left,
            }}
            animate={{
              y: ["-100vh", "100vh"],
              rotate: [0, 360],
            }}
            transition={{
              duration: parseFloat(piece.animationDuration),
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Bouncing Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-10 px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-xl shadow-lg hover:bg-blue-700 focus:outline-none"
      >
        Celebrate More
      </motion.button>
    </div>
  );
};

export default Celebration;