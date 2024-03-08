import React from "react";
import heroImg from "../assets/hero.png";
import Button from "./Button";

function Hero() {
  return (
    <div className="w-full">
      <div className="px-8">
        <h1 className="text-[190px] text-center font-bold">
          DO IT <span className="text-[#4A69E2]">RIGHT</span>
        </h1>
        <div className="mx-8 bg-hero bg-no-repeat bg-cover bg-center h-[600px] relative rounded-[32px]">
          <div className="absolute bottom-12 left-12 z-50">
            <p className="text-6xl font-semibold uppercase">Nike Air Max</p>
            <p className="text-2xl w-2/3 mt-2 mb-6">
              Nike introducing the new air max for everyone's comfort
            </p>
            <Button title="Shop New"/>
          </div>
          <div className="absolute left-0 top-10 bg-[#232321] p-5 font-medium rounded-r-xl z-0">
            <p className="-rotate-180" style={{ writingMode: "vertical-lr" }}>
              Nike product of the year{" "}
            </p>
          </div>
          <div
            className="absolute bottom-0 w-full h-[200px] opacity-50 rounded-[32px]"
            style={{
              background:
                "rgba(0, 0, 0, 0) linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 100%) repeat scroll 0 0",
            }}
          ></div>
          <div className="absolute bottom-8 right-8">
            <img
              src="https://images.unsplash.com/photo-1549298916-f52d724204b4?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="rounded-3xl border-white border-4 w-[160px] h-[140px]"
            />
            <img
              src="https://images.unsplash.com/photo-1549298916-acc8271f8b8d?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="rounded-3xl border-white border-4 mt-4 w-[160px] h-[140px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
