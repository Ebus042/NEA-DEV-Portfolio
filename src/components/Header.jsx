import { useState } from "react";
import { navLinks } from "../data/constant";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [change, setChange] = useState(false);
  return (
    <div className="bg-gradient-to-r from-slate-400 to-slate-800 py-1 fixed w-full z-20">
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
          <ul className="flex items-center flex-col gap-6 bg-slate-500 rounded-b-lg shadow-md text-white py-2 w-full top-0 -z-10 absolute left-0">
            {navLinks.map((link) => (
              <li
                onClick={() => setChange(false)}
                key={link.id}
                className="hover:text-gray-300"
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
