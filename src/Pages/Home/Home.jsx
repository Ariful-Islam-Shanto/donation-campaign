import React from "react";
import Nav from "../../Components/NavBar/Nav";
import "./Home.css";
import Banner from "../../Components/Banner/Banner";



const Home = () => {
    
  return (
    <div>
      <div className="relative bg h-[100vh]">
        <Nav></Nav>
        <Banner></Banner>
      </div>
    </div>
  );
};

export default Home;
