import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaBook,
  FaBars,
  FaTimes,
  FaSun,
  FaMoon,
} from "react-icons/fa";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark/light mode class on <html>
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  const menuItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaInfoCircle /> },
    { name: "Publications", path: "/publications", icon: <FaBook /> },
    { name: "ContactUs", path: "/contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 ${
        darkMode
          ? "bg-gray-900 bg-opacity-90"
          : "bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 bg-opacity-60"
      } backdrop-blur-lg shadow-lg border-b ${
        darkMode ? "border-gray-700" : "border-white/20"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Left: Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Logo"
            className="h-20 w-20 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 text-lg font-medium relative">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative group bg-white/20 dark:bg-gray-800/30 backdrop-blur-md rounded-xl px-3 py-2 flex items-center space-x-2 hover:bg-white/30 dark:hover:bg-gray-700/40 transition-all duration-300 cursor-pointer"
              >
                <span
                  className={`group-hover:text-yellow-300 transition-colors duration-300 ${
                    location.pathname === item.path
                      ? "text-yellow-300"
                      : darkMode
                      ? "text-gray-200"
                      : "text-white"
                  }`}
                >
                  {item.icon}
                </span>
                <Link
                  to={item.path}
                  className={`transition-all duration-300 ${
                    location.pathname === item.path
                      ? "text-yellow-300 font-semibold"
                      : darkMode
                      ? "text-gray-200 hover:text-yellow-200"
                      : "text-white hover:text-yellow-200"
                  }`}
                >
                  {item.name}
                </Link>
                <span
                  className={`absolute left-1 top-full h-[2px] w-0 bg-yellow-300 rounded-full transition-all duration-500 group-hover:w-full ${
                    location.pathname === item.path ? "w-full" : ""
                  }`}
                ></span>
              </li>
            ))}
          </ul>

          {/* Dark / Light Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-white/20 dark:bg-gray-700/40 hover:bg-white/30 dark:hover:bg-gray-600/50 transition"
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-900" />}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-white/20 dark:bg-gray-700/40 hover:bg-white/30 dark:hover:bg-gray-600/50 transition"
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-900" />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-max-h duration-500 overflow-hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        } ${
          darkMode
            ? "bg-gray-900/90"
            : "bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 bg-opacity-90"
        } backdrop-blur-lg`}
      >
        <ul className="flex flex-col px-6 py-3 space-y-2">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`flex items-center space-x-2 ${
                darkMode
                  ? "bg-gray-800/30 hover:bg-gray-700/40"
                  : "bg-white/20 hover:bg-white/30"
              } backdrop-blur-md rounded-xl px-3 py-2 transition-all duration-300 cursor-pointer`}
            >
              <span
                className={`${
                  location.pathname === item.path
                    ? "text-yellow-300"
                    : darkMode
                    ? "text-gray-200"
                    : "text-white"
                }`}
              >
                {item.icon}
              </span>
              <Link
                to={item.path}
                className={`transition-all duration-300 ${
                  location.pathname === item.path
                    ? "text-yellow-300 font-semibold"
                    : darkMode
                    ? "text-gray-200 hover:text-yellow-200"
                    : "text-white hover:text-yellow-200"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Glow Line */}
      <div
        className={`h-[2px] w-full ${
          darkMode
            ? "bg-gray-500/50"
            : "bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500"
        } animate-pulse`}
      ></div>
    </nav>
  );
}
