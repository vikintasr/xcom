import React from 'react'

const SoldierHidden = ({soldier}) => {
    return (
        <div>
            {soldier.tiles_moved / soldier.missions}
        </div>
    )
}

export default SoldierHidden
