import React from 'react';

import classes from './Display.module.css';

import DisplayItem from './DisplayItem';

const Display = (props) => {
    const items = props.data;
    
    const addHandler = (data) => {
      props.onAdd(data)
    }

    const susbstractHandler = data => {
      props.onSubstract(data)
    }
    
    return (
    <div className={classes.display}>
      <div className={classes.items}>
        {items.map(item => {
          return (<DisplayItem data={item} key={item.id} onAdd={addHandler} onSubstract={susbstractHandler}></DisplayItem>)
        })}
      </div>
    </div>
  )
}

export default Display