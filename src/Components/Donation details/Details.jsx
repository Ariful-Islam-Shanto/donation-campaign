import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const detailData = data.find((details) => details.id === parseInt(id));

  const { img, title, description, price } = detailData;


  return (
    <div>
      <div className="px-36 py-12">
        <div className=" relative">
          <img
            src={img}
            alt=""
            className=" w-full relative h-[500px] rounded-md"
          />
          <div  className="bg-black opacity-60 absolute bottom-0 left-0 h-[20vh] w-full rounded-md"></div>
          <button className=" bg-[#FF444A] absolute bottom-8 left-8 px-5 py-2 text-white rounded-md font-semibold border-none">
            Donate ${price}
          </button>
        </div>
        <div className="py-6 space-y-4">
          <h1 className="text-4xl font-bold text-black">{title}</h1>
          <p className="text-black">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
