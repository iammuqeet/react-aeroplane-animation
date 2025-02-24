import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom"; // Track route changes

const Runway = () => {
  const [scrollY, setScrollY] = useState(0);
  const [maxScroll, setMaxScroll] = useState(1); // Prevent division by zero
  const location = useLocation(); // Get current page route
  const numLines = 15; // Total number of runway lines

  useEffect(() => {
    const updateMaxScroll = () => {
      setMaxScroll(document.documentElement.scrollHeight - window.innerHeight);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateMaxScroll);
    updateMaxScroll(); // Initial max scroll value

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateMaxScroll);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setScrollY(0);
      setMaxScroll(document.documentElement.scrollHeight - window.innerHeight);
    }, 200); // Delay ensures accurate height calculation
  }, [location.pathname]); // Runs when route changes

  // Normalize the scroll position (0 at bottom, 1 at top)
  const progress = maxScroll > 0 ? scrollY / maxScroll : 0;
  const planeY = (1 - progress) * window.innerHeight; // Y position of the airplane

  return (
    <div className="fixed left-8 top-0 h-screen flex flex-col items-center justify-between">
      {/* Runway Lines */}
      <div className="flex flex-col items-center h-full justify-between bg-[#1c1c1c]">
        {Array.from({ length: numLines }).map((_, index) => {
          const lineY = (index / numLines) * window.innerHeight; // Y position of this line
          const isHovered = planeY <= lineY + 10; // Change color when airplane is above

          return (
            <div key={index} className="flex items-center gap-1">
              <div className="w-1.5 bg-[#1c1c1c]"></div>
              <div
                className={`w-1 h-6 transition-colors duration-300 ${
                  isHovered ? "bg-[#f46000]" : "bg-[#1c1c1c]"
                }`}
              ></div>
              <div className="w-1.5 bg-[#1c1c1c]"></div>
            </div>
          );
        })}
      </div>

      {/* Airplane Animation */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -progress * (window.innerHeight - 80) }} // Moves from bottom to top
        transition={{ type: "tween", ease: "linear" }}
        className="absolute bottom-0"
      >
        <img
          src="/aeroplane.svg"
          alt="Aeroplane"
          className="w-[80px] h-[80px] max-w-none"
        />
      </motion.div>
    </div>
  );
};

export default Runway;
