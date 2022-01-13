import React, {useRef} from 'react';
import classes from './Soldier.module.css';

const AccuracyCalc = ({soldier}) => {


    const accuracy = Math.round((soldier.hits / soldier.shots *100) * 100) / 100;
 
    return (
        <>
        {soldier.shots > 0 
            ? <span className={classes.accuracy__span}><p>Accuracy - </p>
             <p onClick={() => {
                 console.log(accuracy);
             }} className={`${classes.accuracy__value} 
             ${accuracy < 50 && classes.bad}
             ${accuracy >= 50 && accuracy < 65 ? classes.decent : ""}
             ${accuracy >= 65 && accuracy < 90 ? classes.good : ""}
             ${accuracy >= 90 &&  classes.excellent}
              `}>
              {accuracy}%
              </p>
              </span> 
            : <p>Hasn't shot yet</p> }
            </>
    )
}

export default AccuracyCalc
