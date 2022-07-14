import React, { useState , useEffect} from "react";
import Axios from "axios";

function Satimg() {

  useEffect( ()=>{
    getLocation()
  },[])

  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [status, setStatus] = useState(null);


  const getLocation =  () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        
         setLat(position.coords.latitude);
         setLng(position.coords.longitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }

  const [details, setDetails] = useState({});

  const API_KEY = process.env.REACT_APP_API_KEY;

  const fetchDetails = async () => {

    console.log(lat);

    const { data } = await Axios.get(
      `https://api.nasa.gov/planetary/earth/assets?lon=${lng}&lat=${lat}&date=2018-01-01&&dim=0.10&api_key=DEMO_KEY`
    );


      console.log(data);

      const details = data;

      setDetails(details);

    
  };

  const  abc = () => {
    getLocation()
    fetchDetails()
  }

  return (
    <div className="flex flex-col">
      <button
        className="text-white text-xl bg-fuchsia-800 p-2 rounded-lg lg:w-1/3 md:w-2/3 w-full  mx-auto my-3"
        onClick={abc}
      >
        click here to get your location satelite img
      </button>
     
      <img
        className="lg:w-1/4 w-2/3 rounded-3xl  mx-auto"
        src={details.url}
        alt=""
      />
    </div>
  );
}

export default Satimg;
