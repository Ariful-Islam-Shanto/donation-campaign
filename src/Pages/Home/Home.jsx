import React from "react";
import Nav from "../../Components/NavBar/Nav";
import "./Home.css";
import Banner from "../../Components/Banner/Banner";
import Features from "../../Components/Features/Features";



const Home = () => {
    
  return (
    <div>
      <div className="relative bg lg:h-[50vh] xl:h-[75vh] ">
        <Nav></Nav>
        <Banner></Banner>
      </div>
      <Features></Features>
    </div>
  );
};

export default Home;
