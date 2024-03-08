import React from "react";
import logo from "../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="w-full pt-8 px-20">
      <div className="bg-black p-8 text-white rounded-3xl flex items-center">
        <ul className="menus flex items-center gap-10 font-semibold">
          <li>
            <a href="#">New Drops🔥</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
        </ul>
        <div className="logo mx-auto">
          <img src={logo} alt="logo" className="h-8" />
        </div>
        <div className="flex items-center gap-10">
          <IoSearch size={24} />
          <FaUser size={24} />
          <div className="rounded-full px-[11px] py-[5px] bg-[#FFA52F]">0</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
