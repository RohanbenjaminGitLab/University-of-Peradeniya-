import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import slider1 from "../assets/Political.png";
import slider2 from "../assets/Student1.jpg";
import slider3 from "../assets/Student.jpg";

const slides = [
  {
    image: slider1,
    title1: "Department of PoliticalScience",
    title2: "University of Peradeniya.",
    desc: "Explore politics, governance and global studies",
  },
  {
    image: slider2,
    title1: "Student Research & Learning",
    title2: "Academic Excellence",
    desc: "Empowering students through knowledge & debate",
  },
  {
    image: slider3,
    title1: "Future Political Leaders",
    title2: "Shaping Tomorrow",
    desc: "Building critical thinkers for a better society",
  },
];

// Text Animation
const SplitText = ({ text }) => (
  <motion.span
    initial="hidden"
    animate="visible"
    variants={{
      visible: {
        transition: { staggerChildren: 0.04 },
      },
    }}
    className="inline-block"
  >
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        variants={{
          hidden: { y: 30, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        transition={{ duration: 0.5 }}
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </motion.span>
);

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[80vh] overflow-hidden mt-16">
      {/* Background Images */}
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.image}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex items-center px-6 md:px-32 text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl md:text-5xl font-bold leading-tight">
              <SplitText text={slides[index].title1} />
              <br />
              <SplitText text={slides[index].title2} />
            </h1>

            <p className="mt-4 text-lg">
              {slides[index].desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
