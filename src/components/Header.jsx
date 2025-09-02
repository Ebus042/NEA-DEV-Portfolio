import { useState, useEffect } from "react";
import { navLinks } from "../data/constant";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [change, setChange] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`py-1 fixed w-full z-20 ${
        scroll
          ? "bg-gradient-to-r from-green-500 to-emerald-400  shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center mx-10">
        <div className="text-white font-bold">
          <h2>NEA-DEV</h2>
        </div>
        <nav>
          <ul className="hidden md:flex justify-center  items-center text-white text-lg gap-5">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="hover:text-slate-400 hover:scale-125"
              >
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p
          onClick={() => setChange(!change)}
          className="text-white text-xl cursor-pointer md:hidden"
        >
          {change ? <FaTimes /> : <FaBars />}
        </p>

        {change && (
          <ul className="flex items-center flex-col gap-6 bg-green-500 rounded-b-lg shadow-md text-white py-2 w-full top-0 -z-10 absolute left-0">
            {navLinks.map((link) => (
              <li
                onClick={() => setChange(false)}
                key={link.id}
                className="hover:text-emerald-700 hover:scale-100"
              >
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
