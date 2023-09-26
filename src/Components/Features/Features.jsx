import React, { useEffect, useState } from "react";
import FeaturesCard from "../Features Card/FeaturesCard";
import PropTypes from "prop-types";

const Features = ({ searchData }) => {
  const [Features, setFeatures] = useState([]);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch("./donation.json")
      .then((res) => res.json())
      .then((data) => {
        setFeatures(data);
        setAllData(data);
      });
  }, []);

  useEffect(() => {
    if (searchData.toLowerCase() === "health") {
      const newData = allData.filter((data) => data.catName === "Health");

      setFeatures(newData);
    } else if (searchData.toLowerCase() === "education") {
      const newData = allData.filter((data) => data.catName === "Education");

      setFeatures(newData);
    } else if (searchData.toLowerCase() === "clothing") {
      const newData = allData.filter((data) => data.catName === "Clothing");

      setFeatures(newData);
    } else if (searchData.toLowerCase() === "food") {
      const newData = allData.filter((data) => data.catName === "Food");

      setFeatures(newData);
      console.log(newData);
    } else {
      setFeatures(allData);
    }
  }, [searchData, allData]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto px-4 py-12 md:py-24">
        {Features.map((feature) => (
          <FeaturesCard key={feature.id} feature={feature}></FeaturesCard>
        ))}
      </div>
    </div>
  );
};

Features.propTypes = {
  searchData: PropTypes.string,
};

export default Features;
