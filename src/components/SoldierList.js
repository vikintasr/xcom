import React, {useState, useEffect} from 'react';
import Soldier from './Soldier';
import './SoldierList.css';

const SoldierList = ({soldiers}) => {


//   console.log(soldiers);


    return (
        <>
             {soldiers.map(soldier=> 
                <Soldier soldier={soldier} key={soldier.id} />)}  
        </>
    )
}

export default SoldierList
