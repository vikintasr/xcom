import SoldierList from "./components/SoldierList";
// import soldier__data from './data/soldier__data.json';
import './App.css';



// let moreThan15 = soldier__data.filter(soldier => soldier.kills > 20);

const soldier_data = require('./soldiers_data');
console.log(soldier_data);

// console.log(moreThan15);

function App() {
  return (
    <div className="App">
      
      <SoldierList soldiers={soldier_data} />
    
    </div>
  );
}

export default App;
