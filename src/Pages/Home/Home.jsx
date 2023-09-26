import React, { createContext, useContext, useState } from "react";
import Nav from "../../Components/NavBar/Nav";
import "./Home.css";
import Banner from "../../Components/Banner/Banner";
import Features from "../../Components/Features/Features";

export const setData = createContext("");

const Home = () => {
  const [searchData, setSearchData] = useState('');

  const handleSearchData = (searchData) => {
    setSearchData(searchData);
  };
  return (
    <setData.Provider value={handleSearchData}>
      <div>
        <div className="relative bg lg:h-[50vh] xl:h-[75vh] ">
          <Nav></Nav>
          <Banner></Banner>
        </div>
        <Features searchData={searchData}></Features>
      </div>
    </setData.Provider>
  );
};

export default Home;
