import React, {useState, useEffect} from 'react';
import classes from './Navigation.module.css';

const NavigationSort = ({soldiers, forSort}) => {

    const [activeId, setActiveId] = useState();

    const [sortType, setSortType] = useState('kills');

    const values = [
        { id: 1, value: "Kills" },
        { id: 2, value: "Shots" },
        { id: 3, value: "Missions" },
        { id: 4, value: "Accuracy" }
      ];

  useEffect(() => {
    const sortArray = type => {
      const types = {
        Kills: 'kills',
        Shots: 'shots',
        Missions: 'missions',
      };


      const sortProperty = types[type];


        if(sortType === "Accuracy") {
          const sorted = [...soldiers].sort((a, b) => (b.hits / b.shots * 100) - (a.hits / a.shots * 100));
          forSort(sorted);

        } else {
          const sorted = [...soldiers].sort((a, b) => b[sortProperty] - a[sortProperty]);
          forSort(sorted);
        }
    
    };
    sortArray(sortType);
     
  }, [sortType]); 

  return (
      <div className={classes.nav__sorter}>
      <h4>Sort by</h4>
      <ul className={classes.nav__sorter_list} >
            {values.map((val) => (
            <li className={val.id === activeId ? classes.sorter__active : ""} key={val.id} id={val.id} onClick={(e) => {
                setActiveId(val.id);
                setSortType(val.value);
            }}>
              {val.value}
            </li>
          ))}
        </ul>
      </div>
  )
};

export default NavigationSort;
