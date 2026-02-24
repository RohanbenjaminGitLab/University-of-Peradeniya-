import { FaFacebook, FaInstagram, FaWhatsapp, FaPhoneAlt, FaLinkedin, FaArrowUp, FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import devImg from "../assets/Asmiya.jpg";

export default function Footer() {
  const iconClass =
    "text-2xl transition-all duration-300 hover:scale-125 hover:-translate-y-1";

  // Typing effect for copyright
  const [typed, setTyped] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const text = `© ${new Date().getFullYear()} MyWebsite. All Rights Reserved.`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Apply dark/light mode class on <html>
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <footer className={`relative mt-20 overflow-hidden ${darkMode ? "bg-gray-900" : ""}`}>
      {/* Glow Background */}
      <div className={`absolute inset-0 opacity-70 blur-3xl animate-gradient-x ${darkMode ? "bg-gray-800" : "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"}`}></div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className={`relative border rounded-3xl text-white shadow-2xl p-6 md:p-10 backdrop-blur-xl ${darkMode ? "bg-gray-900/70 border-gray-700" : "bg-white/10 border-white/20"}`}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

          {/* LEFT - Social Media */}
          <div className="flex gap-5 md:w-1/3 justify-center md:justify-start">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className={`${iconClass} ${darkMode ? "hover:text-blue-400" : "hover:text-blue-300"} hover:drop-shadow-lg`}>
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noreferrer" className={`${iconClass} ${darkMode ? "hover:text-blue-500" : "hover:text-blue-400"} hover:drop-shadow-lg`}>
              <FaLinkedin />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className={`${iconClass} ${darkMode ? "hover:text-pink-400" : "hover:text-pink-300"} hover:drop-shadow-lg`}>
              <FaInstagram />
            </a>
            <a href="https://wa.me/94" target="_blank" rel="noreferrer" className={`${iconClass} ${darkMode ? "hover:text-green-400" : "hover:text-green-300"} hover:drop-shadow-lg`}>
              <FaWhatsapp />
            </a>
            <a href="tel:+94715359423" className={`${iconClass} ${darkMode ? "hover:text-yellow-400" : "hover:text-yellow-300"} hover:drop-shadow-lg`}>
              <FaPhoneAlt />
            </a>
          </div>

          {/* CENTER - Auto Typing Copyright */}
          <div className="text-center md:w-1/3">
            <p className={`text-sm font-mono ${darkMode ? "text-gray-300" : "text-white"} opacity-80`}>{typed}</p>
            <p className={`mt-3 text-sm ${darkMode ? "text-gray-400" : "text-white"} opacity-90`}>Designed with ❤️ by</p>
            <p className={`font-extrabold text-lg tracking-wide bg-clip-text text-transparent bg-gradient-to-r ${darkMode ? "from-yellow-400 to-white" : "from-yellow-300 to-white"} hover:scale-105 transition-transform`}>
              Muhammad Ameen Fathima Asmiya
            </p>
            <p className={`text-sm font-medium opacity-80 ${darkMode ? "text-gray-400" : "text-white"}`}>
              Junior Web Developer
            </p>
          </div>

          {/* RIGHT - Developer */}
          <div className="md:w-1/3 flex justify-end">
            <div className="flex flex-col items-center text-center">
              <motion.img
                whileHover={{ scale: 1.15, rotate: 3 }}
                transition={{ type: "spring", stiffness: 200 }}
                src={devImg}
                alt="Developer"
                className={`w-20 h-20 md:w-24 md:h-24 rounded-full border-4 ${darkMode ? "border-gray-600" : "border-white/40"} shadow-xl object-cover hover:shadow-pink-400/50 transition-shadow`}
              />
              <p className={`mt-3 text-sm font-semibold tracking-wide hover:scale-105 transition-transform ${darkMode ? "text-gray-300" : "text-white"}`}>
                Developed By <br />
                <span className="font-bold text-base text-yellow-300">Ameen Fathima Asmiya</span>
              </p>
            </div>
          </div>

        </div>

        {/* Dark/Light Toggle */}
        <div className="absolute top-6 right-6 md:right-10">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-white/20 dark:bg-gray-700/40 hover:bg-white/30 dark:hover:bg-gray-600/50 transition"
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-900" />}
          </button>
        </div>

        {/* Back-to-top floating button with pulse gradient animation */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 p-2 rounded-full shadow-2xl text-white z-50"
          whileHover={{ scale: 1.15 }}
          animate={{
            boxShadow: [
              "0 0 10px #7f00ff, 0 0 20px #e100ff, 0 0 30px #ff00c8",
              "0 0 20px #7f00ff, 0 0 40px #e100ff, 0 0 60px #ff00c8"
            ]
          }}
          transition={{ repeat: Infinity, repeatType: "mirror", duration: 2 }}
        >
          <FaArrowUp size={20} />
        </motion.button>
      </motion.div>
    </footer>
  );
}
