import logo from './logo.svg';
import './App.css';
import data from './components/data';
import { useState } from 'react';
import Cards from './components/Cards';

function App() {
  const [cardsdata , setCradsData] = useState(data);
  console.log(cardsdata);
    return (
    <div className="App">
     <h1>University Trip</h1>
     <Cards data={cardsdata}/>
    </div>
  );
}

export default App;
