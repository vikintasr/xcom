import React, {useState} from 'react';
import SoldierList from "./components/SoldierList";
import Navigation from "./components/Navigation";
import './App.css';

const soldier_data = require('./soldiers_data');

function App() {

  const [filtered, setFiltered] = useState([]);

  const onSort = (data) => {
    setFiltered(data);
  }

  
  return (
    <div className="App">
      <Navigation sortList={onSort} soldiers={soldier_data}/>
      <SoldierList soldiers={filtered} />
    </div>
  );
}

export default App;
