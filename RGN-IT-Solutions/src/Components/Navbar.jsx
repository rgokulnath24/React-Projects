import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "HOME", to: "/Home" },
    { name: "ABOUT", to: "/About" },
    { name: "SERVICES", to: "/Services" },
    { name: "CONTACT", to: "/Contact" },
  ];

  return (
    <div className="bg-gray-300 w-full shadow-md fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center px-2 md:px-6 py-0">
        
        {/* Logo */}
        <img className="w-16 h-16 md:w-[90px] md:h-[90px]" src="rgn_logo.png" alt="logo" />

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 font-semibold text-gray-800">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 transitions-colors duration-300"
                  : "hover:text-blue-500 transition-colors duration-300"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"} {/* Toggle icon */}
        </div>
      </div>

<AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="md:hidden flex flex-col bg-gray-300 w-full px-6 py-4 absolute top-full left-0 shadow-md z-40"
    >
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className="py-2 hover:text-blue-500"
          onClick={() => setMenuOpen(false)} // optional: close menu on click
        >
          {link.name}
        </NavLink>
      ))}
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
}
