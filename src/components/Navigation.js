import React, {useState, useEffect} from 'react';
import NavigationSort from './NavigationSort';
import DeadSelector from './DeadSelector';
import classes from './Navigation.module.css';

const Navigation = ({soldiers, sortList}) => {

  const [fullyFiltered, setFullyFiltered] = useState([]);
  const [preFiltered, setPreFiltered] = useState(soldiers);

  const onSort = (data) => {
    setPreFiltered(data);
  }

 const onDeadCheck = (data) => {
  setPreFiltered(data);
  }


  useEffect(() => {
    setFullyFiltered(preFiltered);
    sortList(fullyFiltered);
  },[onDeadCheck, onSort])

  return (
      <div className={classes.nav__top}>
        <DeadSelector deadFiltered={onDeadCheck} soldiers={soldiers} />
        <NavigationSort forSort={onSort} soldiers={preFiltered}/>
      </div>
  )
};

export default Navigation;
