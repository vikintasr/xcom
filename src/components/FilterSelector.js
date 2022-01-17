import React, {useState, useEffect} from 'react';
import DeadSelector from './DeadSelector';

const FilterSelector = ({filtered, soldiers}) => {

    const [sortType, setSortType] = useState('kills');
    const [checkedSoldiers, setCheckedSoldiers] = useState([]);
    
    console.log(checkedSoldiers);
    
  useEffect(() => {
    const sortArray = type => {
      const types = {
        mvps: 'mvps',
        kills: 'kills',
        shots: 'shots',
        missions: 'missions',
      };


      const sortProperty = types[type];


        if(sortType === "accuracy") {
          const sorted = [...checkedSoldiers].sort((a, b) => (b.hits / b.shots * 100) - (a.hits / a.shots * 100));
          filtered(sorted);

        } else {
          const sorted = [...checkedSoldiers].sort((a, b) => b[sortProperty] - a[sortProperty]);
          filtered(sorted);
        }
    
    };
    sortArray(sortType);
     
  }, [sortType, checkedSoldiers]); 

 

  const onDeadCheck = (data) => {
      setCheckedSoldiers(data);
      console.log(checkedSoldiers);
  }

    return (
        <>
      <DeadSelector soldiers={soldiers} deadFiltered={onDeadCheck}/>
        <select onChange={(e) => setSortType(e.target.value)}>
          <option value="kills">Kills</option>
          <option value="shots">Shots</option>
          <option value="missions">Missions</option>
          <option value="accuracy">Accuracy</option>
        </select>
        </>
    )
}

export default FilterSelector
