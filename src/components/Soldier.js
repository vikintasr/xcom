import React, { useState } from 'react';
import SoldierWrapper from '../UI/SoldierWrapper';
import AccuracyCalc from './AccuracyCalc';
import SoldierHidden from './SoldierHidden';
// import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import classes from './Soldier.module.css';
import { FaArrowAltCircleDown } from "react-icons/fa";

const Soldier = ({soldier}) => {

  const [clicked, setClicked] = useState(false);

  const openHidden = () => {
    setClicked(!clicked);
  }

    return (
      <>
        <SoldierWrapper soldier={soldier} className={(soldier.dead && "soldier__rip")}>
          <div className={classes.soldier__wrapper_first}>
          <div className={classes.soldier__name}>
          <h2>{soldier.name}</h2>
            <h3>'{soldier.nickname}'</h3>
            <p>{soldier.class}</p>
          </div>
        
        <div className={classes.soldier__info}>
          
            <div>
            <h3>Missions</h3>
            <p>{soldier.missions}</p>
            </div>

            <div>
            <AccuracyCalc soldier={soldier}/>
            </div>
            
            <div>
              <h3>Kills</h3>
              <p>{soldier.kills} ({soldier.lost_kills} L)</p>
            </div>

            <div>
              <h3>Shots</h3>
              <p>{soldier.shots}</p>
            </div>

        </div>
        
        <span className={`classes.arrow__toggler ${clicked ? classes.arrow__reverse : ""}`} value={clicked} onClick={() => {
          openHidden();
        }}><FaArrowAltCircleDown /></span>
          </div>
          <div className={`${!clicked ? classes.soldier__hidden_off : classes.soldier__hidden_on}`}>
          <SoldierHidden  soldier={soldier}/>
          </div>
        </SoldierWrapper>
        
        </>
    )
}

export default Soldier
