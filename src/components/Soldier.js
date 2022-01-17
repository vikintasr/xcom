import React from 'react';
import SoldierWrapper from '../UI/SoldierWrapper';
import AccuracyCalc from './AccuracyCalc';
import SoldierHidden from './SoldierHidden';
// import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import classes from './Soldier.module.css';
import { FaArrowAltCircleDown } from "react-icons/fa";

const Soldier = ({soldier}) => {

  
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
            <p>Missions</p>
            <p>{soldier.missions}</p>
            </div>

            <div>
            <AccuracyCalc soldier={soldier}/>
            </div>
            
            <div>
              <p>Kills</p>
              <p>{soldier.kills} ({soldier.lost_kills} L)</p>
            </div>

            <div>
              <p>Shots</p>
              <p>{soldier.shots}</p>
            </div>

            <div>
              <p>TPM</p>
              <p>{(soldier.tiles_moved / soldier.missions).toFixed(2)}</p>
            </div>
        
    
        </div>
        
        <h4 className={classes.arrow__toggler} onClick={() => {
          console.log(this);
        }}><FaArrowAltCircleDown /></h4>
          </div>
          {/* <SoldierHidden soldier={soldier}/> */}
        </SoldierWrapper>
        
        </>
    )
}

export default Soldier
