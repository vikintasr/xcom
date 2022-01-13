import React, {useState, useEffect} from 'react';
import SoldierWrapper from '../UI/SoldierWrapper';
import Soldier from './Soldier';
import './SoldierList.css';

const SoldierList = ({soldiers}) => {

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
         {/* {filtered} */}
        </div>
        </>
    )
}

export default SoldierList
