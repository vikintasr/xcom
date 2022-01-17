import SoldierList from "./components/SoldierList";
import './App.css';

const soldier_data = require('./soldiers_data');

function App() {

  console.log(<SoldierList />)
  
  return (
    <div className="App">
    
      <SoldierList soldiers={soldier_data} />
    </div>
  );
}

export default App;
