import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
const [LocalData, setLocalData] = useState([]);    
const [isDataExist, setIsDataExist] = useState(false);
  const Donation = useLoaderData();

  
  console.log(Donation); 
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('donation'));
    if(!data) {
       setIsDataExist("No data found");
    }else {
        const newData = [...data];
        setLocalData(newData);
    }

    
  },[]) 
  
 

  const COLORS = [ "#0088FE", "#00C49F", "#FFBB28"];

  const total = LocalData.reduce((sum, entry) => sum + entry.price, 0);
  const totalDonation = Donation.reduce((sum, entry) => sum + entry.price, 0);


  let chartData;
  if(isDataExist === 'No data found') {
    chartData = [
        { name: "Total Donation", price: totalDonation }
      ];
  }else {
    chartData = [
        { name: "Total Donation", price: totalDonation },
        { name: "Your Donation", price: total },
      ];
  }


  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    const percentage = `${(percent * 100).toFixed(2)}%`;

    return (
      <text
        x={x}
        y={y}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={14}
      >
        {` ${percentage}`}
      </text>
    );
  };

  return (
    <div>
        {/* {isDataExist === 'No data found' ?
        <div>No data found</div> : */}
        <div>
      <div className="flex items-center justify-center">
        <PieChart width={400} height={400}>
          <Pie
            data={chartData}
            cx={200}
            cy={200}
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="price"
            label={renderCustomizedLabel}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
      <div className="flex items-center gap-6 justify-center mt-0 pb-12">
      <div className="flex items-center gap-4 justify-center">
      <h1 className="text-sm text-black font-medium">Total Donation</h1>
        <div
          className="h-2 w-24"
          style={{ backgroundColor: COLORS[0] }}
        ></div>
        
      </div>
      <div className=" flex items-center gap-4 justify-center">
      <h1 className="text-sm text-black font-medium">Your Donation</h1>
        <div
            className="h-2 w-24"
          style={{ backgroundColor: COLORS[1] }}
        ></div>
       
      </div>
    </div>
    </div>
{/* } */}
    </div>
  );
};

export default Statistics;
