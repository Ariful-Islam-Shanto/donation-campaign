import React from "react";
import "./Banner.css";

const Banner = () => {

  const handleDetails = () => {

  }

  return (
   
    <div onClick={handleDetails} className=" lg:h-[60vh] xl:h-[85vh] flex items-center justify-center">
      <div className="space-y-12">
        <h1 className="text-3xl text-center text-black font-bold ">
          I Grow By Helping People In Need
        </h1>
        <div className="flex items-center justify-center items-center">
          <input
            type="text"
            placeholder="Search here..."
            className="px-4 py-2 rounded-lg border shadow-none placeholder-gray-400 outline-0 w-[300px]"
          />
          <button className=" bg-[#FF444A] px-4 py-[9px] border rounded-tl-none rounded-tr-xl rounded-br-xl text-white rounded-bl-none -ml-10">Search</button>
        </div>
      </div>
    </div>
  
  );
};

export default Banner;
