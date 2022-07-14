import React, { useState } from "react";
import Axios from "axios";


function Apod() {
  const [details, setDetails] = useState({});

  const API_KEY = process.env.REACT_APP_API_KEY;

  

  

  const fetchDetails = async () => {
    const { data } = await Axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
      
    );

    console.log(data);

    const details = data;

    setDetails(details);
  };

  return (
    <div className="mt-4  flex flex-col">
      <button
        className="text-white text-xl bg-fuchsia-800 p-2 rounded-lg lg:w-1/3 md:w-2/3 w-full  mx-auto my-3"
        onClick={fetchDetails}
      >
        click here to get Astronomy picture of day
      </button>

      <div className="flex flex-col space-y-4">
        <p className="mx-auto text-white text-xl font-medium">
          {details.title}
        </p>
        <img
          src={details.url}
          alt=""
          className="lg:w-1/4 w-2/3 rounded-3xl  mx-auto"
        />

        <p className="mx-auto text-white text-xl font-medium">{details.date}</p>

        <p className="mx-auto text-white text-xl font-normal lg:w-1/3 p-5 text-justify">
          {details.explanation}
        </p>
      </div>
    </div>
  );
}

export default Apod;
