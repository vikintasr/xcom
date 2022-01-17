import React, {useState, useEffect} from 'react';
import classes from './Soldier.module.css';

const DeadSelector = ({soldiers, deadFiltered}) => {

    const [isChecked, setIsChecked] = useState(false);


      useEffect(() => {
          let sorted = [];
            (isChecked ? sorted = soldiers.filter((user) => user.dead !== true) : sorted = soldiers);
            deadFiltered(sorted);
            
      },[isChecked, soldiers])

      const handleOnChange = () => {
        setIsChecked(!isChecked);
      };

    return (
        <div className={classes.dead__checker}>
            <input onChange={handleOnChange} type="checkbox" id="isDead" name="isDead" checked={isChecked} />
            <label htmlFor="isDead">Hide Dead</label>
        </div>
    )
}

export default DeadSelector
