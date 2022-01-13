import SoldierList from "./components/SoldierList";
import soldier__data from './data/soldier__data.json';
import './App.css';


const mission_data = {
  total_missions: 2,
  poor_missions: 1,
  fair_missions: 1,
  good_missions: 1,
  excellent_missions: 1,
  flawless_missions: 1
}
  


let moreThan15 = soldier__data.filter(soldier => soldier.kills > 20);

console.log(moreThan15);

function App() {
  return (
    <div className="App">
      
      <SoldierList soldiers={soldier__data} />
    
    </div>
  );
}

export default App;
