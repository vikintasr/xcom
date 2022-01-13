import React from 'react';
import SoldierWrapper from '../UI/SoldierWrapper';
import AccuracyCalc from './AccuracyCalc';
// import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import classes from './Soldier.module.css';

const Soldier = ({soldier}) => {

  
    return (
        <SoldierWrapper>
          <div className={classes.soldier__name}>
          <h2>{soldier.name}</h2>
            <h3>'{soldier.nickname}'</h3>
          </div>
           
        <div className={classes.soldier__info}>
          <p>Missions - {soldier.missions} |</p>
              <AccuracyCalc soldier={soldier}/>
          <p>| Kills - {soldier.kills} </p>
          <p> | Shots - {soldier.shots}</p>
        </div>
        <h4>x</h4>
        </SoldierWrapper>
    )
}

export default Soldier
