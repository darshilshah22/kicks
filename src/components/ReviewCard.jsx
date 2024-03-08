import React from "react";
import { FaStar } from "react-icons/fa6";

function ReviewCard() {
  return (
    <div className="h-[325px] rounded-2xl">
      <div className="bg-white w-full rounded-t-2xl p-4 text-black flex gap-2">
        <div>
          <p className="font-semibold">Good Wuality</p>
          <p className="font-thin text-sm">
            I highly recommend shopping from kicks
          </p>
          <div className="flex items-center gap-1">
            <FaStar color="#FFA52F" size={16} />
            <FaStar color="#FFA52F" size={16} />
            <FaStar color="#FFA52F" size={16} />
            <FaStar color="#FFA52F" size={16} />
            <FaStar color="#FFA52F" size={16} />
            <p className="font-semibold ml-2">5.0</p>
          </div>
        </div>
        <div
          className="bg-top bg-no-repeat bg-cover w-20 h-16 rounded-[50%]"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          }}
        ></div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="rounded-b-2xl"
      />
    </div>
  );
}

export default ReviewCard;
