import React from 'react';
import classes from './SoldierWrapper.module.css';

const Card = (props) => {
    return (
        <div className={classes.soldier__wrapper}>
           {props.children} 
        </div>
    )
}

export default Card
