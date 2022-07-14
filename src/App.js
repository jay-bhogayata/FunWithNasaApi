import './App.css';
import Apod from './Apod';

function App() {
  return (
    <div className='flex mt-5 flex-col'>
       <h1
       className='text-white text-3xl mx-auto font-semibold' 
       >Nasa Api</h1>
       <Apod/>
    </div>
    );
}

export default App;
