import React from 'react';
import classes from './SoldierWrapper.module.css';

const Card = (props) => {
    return (
        <div className={`${classes.soldier__wrapper} ${(props.soldier.dead ? classes.soldier__rip : classes.soldier__norip)}`}>
           {props.children} 
        </div>
    )
}

export default Card
