import React from "react";
import lifestyle from "../assets/categories/lifestyle.png";
import basketball from "../assets/categories/basketball.png";
import cricket from "../assets/categories/cricket.png";
import { MdArrowOutward } from "react-icons/md";

function Categories() {
  return (
    <div className="w-full pt-12 pl-14 bg-white text-[#232321]">
      <div className="flex items-center justify-between">
        <p className="uppercase font-semibold text-6xl w-1/2">Categories</p>
        {/* <Button title="Shop New Drops" /> */}
      </div>
      <div className="bg-[#232321] rounded-tl-[40px] w-full mt-8 p-4 flex items-center">
        <div
          className="relative w-full h-[380px] bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${lifestyle})` }}
        >
          <div className="flex items-center justify-between px-6 pb-2 absolute bottom-0 w-full">
            <p className="font-semibold text-xl text-white uppercase w-1/3">
              Lifestyle Shoes
            </p>
            <span className="bg-white p-1 rounded">
              <MdArrowOutward color="#232321" />
            </span>
          </div>
        </div>
        <div
          className="relative w-full h-[380px] bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${basketball})` }}
        >
          <div className="flex items-center justify-between px-6 pb-2 absolute bottom-0 w-full">
            <p className="font-semibold text-xl text-white uppercase w-1/3">
              Lifestyle Shoes
            </p>
            <span className="bg-white p-1 rounded">
              <MdArrowOutward color="#232321" />
            </span>
          </div>
        </div>
        <div
          className="relative w-full h-[380px] bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${cricket})` }}
        >
          <div className="flex items-center justify-between px-6 pb-2 absolute bottom-0 w-full">
            <p className="font-semibold text-xl text-white uppercase w-1/3">
              Lifestyle Shoes
            </p>
            <span className="bg-white p-1 rounded">
              <MdArrowOutward color="#232321" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
