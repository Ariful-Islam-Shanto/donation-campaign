import React from "react";
import PropType from "prop-types";
import { Link } from "react-router-dom";

const FeaturesCard = ({ feature }) => {
  const { id, title, catName, img, catBgColor, catNameBgColor, catTitleColor } =
    feature;

  const textAndBgColor = {
    color: catTitleColor,
    backgroundColor: catNameBgColor,
  };

  const textColor = {
    color: catTitleColor,
  };

  const cardBg = {
    backgroundColor: catBgColor,
  };
  return (
    <div>
         <Link to={`/details/${id}`}>
      <div
        style={cardBg}
        className="card  shadow-xl flex flex-col justify-between"
      >
        <figure>
          <img src={img} alt="Shoes" className="h-[180px] w-full" />
        </figure>
        <div className="px-6 py-4 flex flex-col">
          <div className="flex-grow">
            <button
              style={textAndBgColor}
              className="text-xs px-3 py-1 rounded-sm font-medium "
            >
              {catName}
            </button>
          </div>
          <div className="flex-grow">
            <h1 style={textColor} className="text-lg font-semibold">
              {title}
            </h1>
          </div>
        </div>
      </div>
      </Link>
    </div>

  );
};

FeaturesCard.propTypes = {
  feature: PropType.object,
};

export default FeaturesCard;
