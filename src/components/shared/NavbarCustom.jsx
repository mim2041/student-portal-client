import React, { useEffect, useState } from "react";
import { HiMenu, HiMenuAlt3 } from "react-icons/hi";
import { navLinks } from "../../data/nav/navLinks";
import { Link } from "react-router-dom";

const NavbarCustom = ({ src, initialActiveLink }) => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(initialActiveLink);

  useEffect(() => {
    //track the link for setActive state
    const currentPath = window.location.pathname;
    const activeLink = navLinks?.find(
      (link) => link.path === currentPath.slice(1)
    );
    if (activeLink) {
      setActive(activeLink.title);
    } else {
      setActive("");
    }
  }, []);

  return (
    <nav
      style={{ zIndex: "999" }}
      className="w-full bg-white bg-opacity-50 backdrop-filter sticky top-0 backdrop-blur-xl "
    >
      <div className=" flex py-6 justify-between items-center px-8 lg:px-40">
        {/* Logo */}
        <Link
          className="flex justify-start lg:justify-center flex-row-reverse items-center"
          to="/"
        >
          <h1 className="lg:text-xl z-10 font-medium text-[#15678f]">
            {/* #15678f */}
            Chinta Research
          </h1>
          <img
            src={`${src ? src : ""}`}
            alt="my gif"
            height={100}
            width={80}
            className=" lg:-ml-5 lg:mt-2"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks?.map((nav, index) => (
            <li
              key={nav.path}
              className={`mx-2 font-poppins font-medium cursor-pointer text-center py-2 w-24 md:w-28 rounded-lg text-[20px] hover:bg-gray-100 ${
                active === nav.title
                  ? " text-text-primary bg-secondary-300"
                  : "text-text-secondary"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-0"}`}
              onClick={() => setActive(nav.title)}
            >
              <Link to={`/${nav.path}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex justify-end items-center">
          {toggle ? (
            <div onClick={() => setToggle(!toggle)}>
              <HiMenuAlt3 className="w-[28px] h-[28px] object-contain" />
            </div>
          ) : (
            <div onClick={() => setToggle(!toggle)}>
              <HiMenu className="w-[28px] h-[28px] object-contain" />
            </div>
          )}

          {/* Sidebar */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-secondary-500 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks?.map((nav, index) => (
                <li
                  key={nav.path}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <Link to={`/${nav.path}`}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarCustom;
