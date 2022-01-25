import React from 'react'
import classes from './Soldier.module.css'

const SoldierHidden = ({soldier}) => {
    return (
        <div className={classes.soldier__hidden}>

            <div>
                <h4>MVPs</h4>
                <p>{soldier.mvps}</p>
            </div>

            <div>
                <h4>Tiles Moved</h4>
                <div className={classes.hidden__quadrant}>
                    <p>Total</p>
                    <p>{soldier.tiles_moved}</p>
                </div>

                <div className={classes.hidden__quadrant}>
                    <p>Per Mission</p>
                    <p>{(soldier.tiles_moved / soldier.missions).toFixed(2)}</p>
                </div>
            
            </div>

            <div>
                <h4>Kills</h4>
                <div className={classes.hidden__quadrant}>
                    <p>Total</p>
                    <p>{soldier.kills}</p>
                </div>

                <div className={classes.hidden__quadrant}>
                    <p>Per Mission</p>
                    <p>{(soldier.kills / soldier.missions).toFixed(2)}</p>
                </div>
            
            </div>

            <div>
                <h4>DMG Done</h4>
                <div className={classes.hidden__quadrant}>
                    <p>Total</p>
                    <p>{soldier.damage_dealt}</p>
                </div>

                <div className={classes.hidden__quadrant}>
                    <p>Per Mission</p>
                    <p>{(soldier.damage_dealt / soldier.missions).toFixed(2)}</p>
                </div>
            
            </div>
            
        </div>
    )
}

export default SoldierHidden
