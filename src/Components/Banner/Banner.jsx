import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className=" h-[100vh] flex items-center justify-center">
      <div className="space-y-12">
        <h1 className="text-5xl text-center text-black font-bold ">
          I Grow By Helping People In Need
        </h1>
        <div className="flex justify-center items-center">
          <input
            type="text"
            placeholder="Search here..."
            className="px-5 py-3 rounded-lg border shadow-none placeholder-gray-400 outline-0 w-[470px]"
          />
          <button className="btn bg-[#FF444A] px-6 py-4 rounded-tl-none text-white rounded-bl-none -ml-8">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
