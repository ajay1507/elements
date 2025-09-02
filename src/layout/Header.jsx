import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import logo from "../assets/Header/Logo.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/service" },
    { name: "Transactions", path: "/transactions" },
  ];

  const baseLinkClass =
    "px-6 py-1.5 text-lg rounded-full font-semibold transition duration-200";
  const activeLinkClass = "active-gradient shadow-lg text-black";

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <style>{`
        .active-gradient {
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.34) 42.68%, rgba(29, 29, 29, 0.1666) 100%);
          border: 1px solid #D4D4D4;
        }
        .blinking-dot {
          background: lightgreen;
          animation: blink 1.8s infinite ease-in-out;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
      <div className="relative w-full bg-white shadow-xl h-20 flex items-center justify-center rounded-b-[3rem] overflow-hidden">
        <div className="flex items-center justify-between w-11/12 max-w-6xl">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-15 h-15" />
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
              <span className="inline-block w-3 h-3 rounded-full blinking-dot"></span>
            </NavLink>
          </nav>
          <button
            className="md:hidden text-gray-800 text-3xl p-1 rounded"
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
                {name === "Contact" && (
                  <span className="inline-block w-3 h-3 rounded-full blinking-dot ml-2"></span>
                )}
              </NavLink>
            );
          })}
        </nav>
      )}
    </header>
  );
}

export default Header;
