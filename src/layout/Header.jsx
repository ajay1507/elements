import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import logo from "../assets/Header/Logo.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuBtnActive, setMenuBtnActive] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/service" },
    { name: "Transactions", path: "/transactions" },
  ];

const baseLinkClass =
  "px-6 py-1.5 text-lg rounded-full font-semibold transition duration-200 cursor-pointer " +
  "text-black hover:bg-gray-100 hover:text-blue-600 " +  // keep text blue on hover
  "active:bg-gray-100 active:text-black hover:shadow-lg";

  const activeLinkClass = "bg-gradient-hover  shadow-lg";


  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="relative w-full bg-gray shadow-x2 h-20 flex items-center justify-center rounded-b-[3rem] overflow-hidden">
        <div className="flex items-center justify-between w-full max-w-[1440px] mx-auto">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-13 h-13" />
          </div>
          <nav className="hidden md:flex items-center gap-6 font-medium text-black">
            {navLinks.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                end={path === "/"}
                className={({ isActive }) =>
                  `${baseLinkClass} ${isActive ? activeLinkClass : "bg-transparent"}`
                }
              >
                {name}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `flex items-center gap-2 ${baseLinkClass} ${
                  isActive ? activeLinkClass : "bg-transparent"
                }`
              }
            >
              Contact
             
            </NavLink>
          </nav>
          <button
            className={`
              md:hidden text-gray-800 text-3xl p-1 rounded transition
              ${menuBtnActive ? "bg-gray-200 shadow-lg" : ""}
              hover:shadow-lg hover:bg-gray-100
              active:bg-gray-300
            `}
            onMouseDown={() => setMenuBtnActive(true)}
            onMouseUp={() => setMenuBtnActive(false)}
            onMouseLeave={() => setMenuBtnActive(false)}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-white px-6 py-4 shadow-lg space-y-3 rounded-b-2xl">
          {[...navLinks.map((link) => link.name), "Contact"].map((name) => {
            const path = name === "Home" ? "/" : `/${name.toLowerCase()}`;
            return (
              <NavLink
                key={name}
                to={path}
                end={path === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-lg ${baseLinkClass} ${
                    isActive ? activeLinkClass : "bg-transparent"
                  }`
                }
              >
                {name}
              </NavLink>
            );
          })}
        </nav>
      )}
    </header>
  );
}

export default Header;