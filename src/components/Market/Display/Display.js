import React from 'react';

import classes from './Display.module.css';

import DisplayItem from './DisplayItem';

const Display = (props) => {
    const items = props.data[1];
  return (
    <div className={classes.display}>
      <div className={classes.items}>
        {items.map(item => {
          return (<DisplayItem data={item} key={item.id}></DisplayItem>)
        })}
      </div>
    </div>
  )
}

export default Display