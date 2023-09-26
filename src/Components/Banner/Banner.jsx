import React, { useContext, useState } from "react";
import "./Banner.css";
import { setData } from "../../Pages/Home/Home";

const Banner = () => {
  const [searchData, setSearchData] = useState('');
  const useApiData = useContext(setData);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchData(e.target.value);

  }
  const handleButtonClick = () => {
    useApiData(searchData);
  }
  return (
   
    <div className=" lg:h-[60vh] xl:h-[85vh] flex items-center justify-center">
      <div className="space-y-12">
        <h1 className="text-3xl text-center text-black font-bold ">
          I Grow By Helping People In Need
        </h1>
        <div className="flex justify-center items-center">
          <input
            onChange={handleSearch}
            type="text"
            placeholder="Search here..."
            className="px-4 py-2 rounded-lg border shadow-none placeholder-gray-400 outline-0 w-[300px]"
          />
          <button onClick={handleButtonClick} className=" bg-[#FF444A] px-4 py-[9px] border rounded-tl-none rounded-tr-xl rounded-br-xl text-white rounded-bl-none -ml-10">Search</button>
        </div>
      </div>
    </div>
  
  );
};

export default Banner;
