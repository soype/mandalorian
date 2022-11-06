import React from 'react';

import classes from './Display.module.css';

const DisplayItem = (props) => {

    const formSubmitHandler = e => {
        e.preventDefault();
    }

    const substractHandler = () => {
      props.onSubstract(props.data.id)
    }

    const addHandler = () => {
      props.onAdd(props.data.id)
    }

  return (
    <div className={classes['display-item']}>
        <h3>{props.data.name}</h3>
        <img src={props.data.img} className={classes['item-img']} alt="" />
        <p>{props.data.price}</p>
        <form onSubmit={formSubmitHandler} className={classes['item-form']}>
          <button className={`${classes.substract} ${classes.button}`} onClick={substractHandler}>-</button>
          <p className={classes['item-amount']}>{props.data.amount}</p>
          <button className={`${classes.add} ${classes.button}`} onClick={addHandler}>+</button>
        </form>
    </div>
  )
}

export default DisplayItem