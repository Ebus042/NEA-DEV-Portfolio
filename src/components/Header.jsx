import { useState, useEffect } from "react";
import { navLinks } from "../data/constant";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

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
        <div className="text-white font-bold xl:text-3xl">
          <h2>NEA-DEV</h2>
        </div>
        <nav>
          <ul className="hidden lg:flex justify-center xl:text-xl xl:gap-8 items-center text-white text-lg gap-5">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="hover:text-emerald-200 hover:scale-125 transition-all ease-in-out duration-500"
              >
                <Link
                  to={link.href}
                  smooth={true}
                  duration={800}
                  offset={-70}
                  spy={true}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p
          onClick={() => setChange(!change)}
          className="text-white text-xl cursor-pointer lg:hidden"
        >
          {change ? <FaTimes /> : <FaBars />}
        </p>

        {change && (
          <ul className="flex items-center flex-col gap-6 bg-green-500 rounded-b-lg shadow-md text-white py-2 w-full top-0 -z-10 absolute left-0">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="hover:text-emerald-700 hover:scale-125 text-lg"
              >
                <Link
                  to={link.href}
                  smooth={true}
                  duration={800}
                  offset={-70}
                  spy={true}
                  onClick={() => setChange(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
