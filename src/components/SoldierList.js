import React, {useState, useEffect} from 'react';
import Soldier from './Soldier';
import './SoldierList.css';
const soldiers = require('../soldiers_data');
console.log(soldiers);

const SoldierList = () => {

    const [data, setData] = useState([]);
  const [sortType, setSortType] = useState('kills');

  useEffect(() => {
    const sortArray = type => {
      const types = {
        kills: 'kills',
        shots: 'shots',
        missions: 'missions',
      };
      const sortProperty = types[type];
      const sorted = [...soldiers].sort((a, b) => b[sortProperty] - a[sortProperty]);
      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType]); 


    return (
        <>
        <select onChange={(e) => setSortType(e.target.value)}>
        <option value="kills">Kills</option>
        <option value="shots">Shots</option>
        <option value="missions">Missions</option>
</select>
        <div className="soldierList__wrapper">

      {data.map(soldier =>
    <Soldier key={soldier.id} soldier={soldier} /> )}
        </div>
        </>
    )
}

export default SoldierList
