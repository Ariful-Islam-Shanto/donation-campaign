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
   
    <div className=" h-[60vh] md:h-[100vh] lg:h-[60vh] xl:h-[600px] flex items-center justify-center">
      <div className=" space-y-6 md:space-y-12  mt-16 md:mt-0 lg:mt-32 xl:mt-0">
        <h1 className="text-3xl md:text-3xl lg:tex-4xl xl:text-5xl text-center text-black font-bold ">
          I Grow By Helping  <br className="static md:hidden lg:hidden"/> People In Need
        </h1>
        <div className="flex justify-center items-center">
          <input
            onChange={handleSearch}
            type="text"
            placeholder="Search here..."
            className="px-4 md:px-4 lg:px-4 py-3 md:py-2 lg:py-2 xl:px-6 xl:py-4 text-xs md:text-sm lg:text-sm xl:text-xl rounded-lg border shadow-none placeholder-gray-400 outline-0 w-full md:w-[350px] lg:w-[350px] xl:w-[450px]"
          />
          <button onClick={handleButtonClick} className=" bg-[#FF444A] px-4  text-xs md:text-sm   md:px-4 lg:px-4 py-[12px] md:py-[8px] lg:py-[9px] xl:px-6 xl:py-[19px] border rounded-tl-none rounded-tr-xl rounded-br-xl text-white rounded-bl-none -ml-10">Search</button>
        </div>
      </div>
    </div>
  
  );
};

export default Banner;
