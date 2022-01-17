import React, {useState, useEffect} from 'react';
import Soldier from './Soldier';
import FilterSelector from './FilterSelector';
import './SoldierList.css';

const SoldierList = ({soldiers}) => {

  const [filtered, setFiltered] = useState([]);

 const filtering = (data) => {
  setFiltered(data);
  console.log(data);
 }

//  useEffect(() => {
    
//  },[filtered])


 console.log(filtered);



 const displayedList = filtered.map(soldier =>
    <Soldier key={soldier.id} soldier={soldier} /> )

    return (
        <>
        <FilterSelector filtered={filtering} soldiers={soldiers}/>
            <div className="soldierList__wrapper">
                {displayedList}
            </div>
        </>
    )
}

export default SoldierList
