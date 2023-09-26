import React from "react";
import { useNavigate } from "react-router-dom";



const ErrorPage = () => {

    const navigate = useNavigate();
  return (
    <div className="h-[100vh] bg-red-50">
      <div className="flex relative items-center justify-center h-full">
        <div className="absolute top-0 left-0 h-[50vh] w-full flex items-center justify-center">
          <h1 className="text-9xl mt-24 font-extrabold text-center text-indigo-400 ">
            404
          </h1>
          </div>
          <div className="bg-gray-50 space-y-6 bottom-0 left-0 absolute h-[50vh] w-full">
            <h1 className="text-4xl text-center text-black font-bold">
              This page does not exist
            </h1>
            <p className="text-xl text-center text-gray-400 font-medium ">The page you are looking for could not be found.</p>
            <div className="flex items-center justify-center">
            <button onClick={() => navigate('/')} className="px-5 py-2 bg-indigo-400 rounded-md hover:bg-indigo-600 font-medium text-white"> Go home</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
