import './App.css';
import Apod from './Apod';
import Satimg from './Satimg';

function App() {
  return (
    <div className='flex mt-5 flex-col'>
       <h1
       className='text-white text-3xl mx-auto font-semibold' 
       >Nasa Api</h1>
       <Apod/>
       <Satimg />
    </div>
    );
}

export default App;
