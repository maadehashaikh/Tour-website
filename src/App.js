import logo from './logo.svg';
import './App.css';
import data from './components/data';
import { useState } from 'react';
import Cards from './components/Cards';

function App() {
  const [cardsdata , setCradsData] = useState(data);  
  function deleter (id) {
    const newcard = cardsdata.filter((card) => {
      return card.id !== id 
    })
    setCradsData(newcard);
  }
  if(cardsdata.length == 0){
    return (
      <div>
        <h2>No Tour Found !</h2>
        <button onClick={() => setCradsData(data)}>Refresh Page</button>
      </div>
    )
  }
  function selector (id) {
    const newcard = cardsdata.filter((card) => {
      return card.id == id 
    })
    setCradsData(newcard);
  }
    return (
    <div className="App">
     <h1>University Trip</h1>
     <Cards data={cardsdata} deleter={deleter} selector={selector}/>
    </div>
  );
}

export default App;
