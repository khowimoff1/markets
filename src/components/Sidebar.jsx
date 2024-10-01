import React from "react";
import { LuChevronLeft } from "react-icons/lu";
import { MdHome } from "react-icons/md";
import { FaShoppingCart, FaStore, FaWarehouse } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
      <div
        className={` md:static absolute md:bg-opacity-100 bg-opacity-95 z-30 ${
          open ? "md:w-56 w-40" : "md:w-20 w-0"
        } duration-300 min-h-screen bg-[#1C2434]  pt-8 md:relative`}
      >
        <div
          onClick={() => setOpen(!open)}
          className={`absolute cursor-pointer z-20 md:-right-3 -right-2 top-9
           md:w-7 w-5 md:text-2xl text-lg bg-white border-2 border-[#1C2434] rounded-full
           ${!open && "rotate-180 -right-[13px] md:-right-3"}`}
        >
          <LuChevronLeft />
        </div>
        <div
          className={`relative flex items-center px-5 ${
            !open && "justify-center"
          }`}
        >
          <img
            src="./Shape.svg"
            alt="logo"
            width={40}
            height={20}
            className={`${open ? "md:w-10 w-7 h-7 md:h-10" : "w-8 h-8"}`}
          />
          <h1
            className={`absolute md:left-[70px] left-[60px] text-white md:text-lg text-base font-semibold origin-left transform transition-transform duration-300 ${
              !open ? "scale-x-0 " : "scale-x-100"
            }`}
          >
            TailAdmin
          </h1>
        </div>

        <ul className={`pt-6 ${!open && "flex flex-col items-center"} links`}>
          <NavLink
            to={"/"}
            className={`${
              !open ? "text-3xl w-full justify-center" : "md:text-base px-8"
            }  flex py-2   hover:bg-[#4a5366] cursor-pointer  items-center gap-2 font-medium text-[#DEE4EE]`}
          >
            <MdHome className="md:text-2xl text-xl" />{" "}
            <span className={`${!open && "hidden"}`}>Menu</span>
          </NavLink>
          <NavLink
            to={"/sotuvbolim"}
            className={`${
              !open ? "text-xl w-full justify-center" : "md:text-base pl-8 md:px-8"
            }  flex py-2 hover:bg-[#4a5366] cursor-pointer  items-center gap-2 font-medium text-[#DEE4EE]`}
          >
            <FaShoppingCart className="mr-1 md:text-lg text-sm" />{" "}
            <span className={`${!open && "hidden"}`}>Sotuv bolim</span>
          </NavLink>
          <NavLink
            to={"/magazine"}
            className={`${
              !open ? "text-lg w-full justify-center" : "text-base px-8"
            }  flex py-2 hover:bg-[#4a5366] cursor-pointer  items-center gap-2 font-medium text-[#DEE4EE]`}
          >
            <FaStore className="mr-1" />{" "}
            <span className={`${!open && "hidden"}`}>Magazine</span>
          </NavLink>
          <NavLink
            to={"/omborxona"}
            className={`${
              !open ? "text-base w-full justify-center" : "text-base w-full pl-8 md:px-8"
            } flex py-2 hover:bg-[#4a5366] cursor-pointer  items-center gap-2 font-medium text-[#DEE4EE]`}
          >
            <FaWarehouse className="mr-1 md:text-base text-sm" />{" "}
            <span className={`${!open && "hidden"}`}>Omborxona</span>
          </NavLink>
          <NavLink
            to={"/sozlamalar"}
            className={`${
              !open ? "text-2xl w-full justify-center" : "text-base pl-8 md:px-8"
            }  flex py-2 hover:bg-[#4a5366] cursor-pointer  items-center gap-2 font-medium text-[#DEE4EE]`}
          >
            <IoMdSettings className="mr-1" />{" "}
            <span className={`${!open && "hidden"}`}>Sozlamalar</span>
          </NavLink>
        </ul>
      </div>
  );
};

export default Sidebar;
