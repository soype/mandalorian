import React from 'react';

import classes from './Display.module.css';

const DisplayItem = (props) => {

    const formSubmitHandler = e => {
        e.preventDefault();
    }

  return (
    <div className={classes['display-item']}>
        <h3>{props.data.name}</h3>
        <img src={props.data.img} className={classes['item-img']} alt="" />
        <p>{props.data.price}</p>
        <form onSubmit={formSubmitHandler}>

        </form>
    </div>
  )
}

export default DisplayItem