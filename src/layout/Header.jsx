import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/Header/Logo.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuBtnActive, setMenuBtnActive] = useState(false);
  const location = useLocation(); // Get current URL

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/service" },
    { name: "Transactions", path: "/transactions" },
    { name: "Contact", path: "/contact" },
  ];

  const baseLinkClass =
    "px-6 py-1.5 text-lg rounded-full font-Roboto transition duration-200 cursor-pointer " +
    "border  text-black hover:text-blue-600 active:text-black";

  const activeLinkClass = "bg-gradient-hover border-blackrgba(0, 0, 0, 5)";

  const isRouteActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path); // partial match for subroutes
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="relative w-full bg-gray shadow-x2 h-20 flex items-center justify-center rounded-b-[3rem] overflow-hidden">
        <div className="flex items-center justify-between w-full max-w-[1440px] mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-13 h-13" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 font-medium text-black">
            {navLinks.map(({ name, path }) => (
              <div
                key={name}
                className={`${baseLinkClass} ${
                  isRouteActive(path) ? activeLinkClass : "bg-transparent"
                }`}
              >
                <NavLink
                  to={path}
                  end={path === "/"}
                  className="block"
                >
                  {name}
                </NavLink>
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white px-6 py-4 shadow-lg space-y-3 rounded-b-2xl">
          {navLinks.map(({ name, path }) => (
            <div
              key={name}
              className={`${baseLinkClass} ${
                isRouteActive(path) ? activeLinkClass : "bg-transparent"
              }`}
            >
              <NavLink
                to={path}
                end={path === "/"}
                onClick={() => setMenuOpen(false)}
                className="block text-lg"
              >
                {name}
              </NavLink>
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;

