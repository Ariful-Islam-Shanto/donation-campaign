import React from 'react';
import { useNavigate } from 'react-router-dom';

const DonationCard = ({donation}) => {

    const { id, price, title, catName, img, catBgColor, catNameBgColor, catTitleColor } =
    donation;

    const navigate = useNavigate();

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
             <div
        style={cardBg}
        className=" rounded-lg shadow-xl flex gap-5 items-center"
      >
        <figure>
          <img src={img} alt="Shoes" className="h-[200px] w-[220px] rounded-lg" />
        </figure>
        <div className=" ">
          <div className="">
            <button
              style={textAndBgColor}
              className="text-xs px-3 py-1 rounded-sm font-medium "
            >
              {catName}
            </button>
          </div>
          <div className="">
            <h1 style={textColor} className="text-lg font-semibold">
              {title}
            </h1>
          </div>
          <div className="">
            <h1 style={textColor} className="text-lg font-semibold">
              {price}
            </h1>
          </div>
          <button onClick={() => navigate(`/details/${id}`) } style={{  backgroundColor: catTitleColor}} className='px-5 text-white rounded-md py-2 text-center font-semibold'>View Details</button>
        </div>
      </div>
        </div>
    );
};

export default DonationCard;