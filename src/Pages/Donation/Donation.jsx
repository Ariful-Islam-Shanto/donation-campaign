import React, { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [noData, setNoData] = useState('');
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const donations = JSON.parse(localStorage.getItem("donation"));
    if(donations) {
        setDonations(donations);
    }else{
        setNoData('No data');
    }
    
  }, []);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
        <div>
        {noData === 'No data' ? 
        <div className="flex items-center justify-center h-[60vh]" >
            <h1 className="text-4xl text-black font-medium">No Data Found</h1>
            </div> :
      <div className="px-2 md:px-6 max-w-6xl mx-auto py-4 md:py-12 grid  md:grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-center">
        {!showAll
          ? donations
              .slice(0, 4)
              .map((donation) => (
                <DonationCard
                  key={donation.id}
                  donation={donation}
                ></DonationCard>
              ))
          : donations.map((donation) => (
              <DonationCard
                key={donation.id}
                donation={donation}
              ></DonationCard>
            ))}
      </div>
       }
      <div className="flex items-center justify-center pb-8">
        {donations.length > 4 ? (
          <button
            onClick={handleShowAll}
            className={ `bg-[#47bf61] px-5 py-2 text-white rounded-md font-semibold border-none ${showAll ? 'hidden' : ''} `}
          >
            Show All
          </button>
        ) : (
          ""
        )}
      </div>

      </div>
    </div>
  );
};

export default Donation;
