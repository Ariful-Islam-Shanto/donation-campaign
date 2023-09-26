import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';

const Details = () => {
  const [detailsData, setDetailsData] = useState([]);
  const data = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    if(!data || data.length === 0) {
      fetch('/donation.json')
      .then(res => res.json())
      .then(data => setDetailsData(data))
      .catch(error => console.error("Error fetching data:", error));
    }
  },[data]);

  const detailData = data.length === 0 ? detailsData.find((details) => details.id === parseInt(id)) :  data.find((details) => details.id === parseInt(id));

  const { img, title, description, price, catTitleColor } = detailData;

  const handleDonation = () => {
    const allData = [];
    const localStorageData = JSON.parse(localStorage.getItem("donation"));
     
    if (!localStorageData) {
      allData.push(detailData);
      localStorage.setItem("donation", JSON.stringify(allData));
      swal({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
        button: "Aww yiss!",
      });
    } else {
      const alReadyExist = localStorageData.find(
        (data) => data.id === parseInt(id)
      );
      console.log(alReadyExist);
      if (!alReadyExist) {
        allData.push(...localStorageData, detailData);
        localStorage.setItem("donation", JSON.stringify(allData));
        swal({
          title: "Good job!",
          text: "You successfully donated!",
          icon: "success",
          button: "Aww yess!",
        });
      }else{
        swal({
          title: "Oops!",
          text: "Already donated!",
          icon: "error",
          button: "Ok!",
        });
      }
    }
  };

  return (
    <div>
      <div className= "px-4 md:px-8 lg:px-6 xl:px-4 max-w-6xl mx-auto py-2 md:py-12">
        <div className="relative">
          <img
            src={img}
            alt=""
            className=" w-full relative h-[300px] md:h-[500px] rounded-md"
          />
          <div className="bg-black opacity-60 absolute bottom-0 left-0  h-[60px] md:h-[100px] w-full rounded-md"></div>
          <button style={{
            backgroundColor : catTitleColor
          }}
            onClick={handleDonation}
            className=" absolute bottom-[9px] md:bottom-8 left-2 md:left-8 px-5 py-2 text-white rounded-md font-semibold border-none"
          >
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
