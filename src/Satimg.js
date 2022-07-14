import React,{useState} from 'react'
import Axios from "axios";

function Satimg() {

  const[lat , setLat] = useState();
  const[lng , setLng] = useState();
  const[status,setStatus] = useState();

  const Location = () => {
    if(!navigator.geolocation){
        setStatus('geo location is not supported')
    }
    else{
        setStatus('....')
        navigator.geolocation.getCurrentPosition((p) => {
            setStatus();
            setLng(p.coords.latitude);
            setLat(p.coords.longitude);
        })
    }
  }

  
  
  
  const [details, setDetails] = useState({});

  const API_KEY = process.env.REACT_APP_API_KEY;

  
  
  

  const fetchDetails = async () => {

    

    const { data } = await Axios.get(
      `https://api.nasa.gov/planetary/earth/assets?lon=-95.33&lat=29.78&date=2018-01-01&&dim=0.10&api_key=DEMO_KEY`
    );


    console.log(data);

    const details = data;   

    setDetails(details);
  };

  
  
  return (
    <div className='flex flex-col'>
        
        <button
        className="text-white text-xl bg-fuchsia-800 p-2 rounded-lg lg:w-1/3 md:w-2/3 w-full  mx-auto my-3"
        onClick={fetchDetails}
       
    >
        click here to get your location satelite img
      </button>

      

      <img 
       className="lg:w-1/4 w-2/3 rounded-3xl  mx-auto"
      src={details.url} alt="" />
      

    </div>
  )
}

export default Satimg



