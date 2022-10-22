import React from 'react'

import classes from '../Market.module.css';

const MarketItemForm = (props) => {

    const submitHandler = e => {
        e.preventDefault();
    }

    const resetHandler = e => {
        props.onReset(e.currentTarget.parentElement.id[5])
    }

    const removeHandler = e => {
        props.onRemove(e.currentTarget.parentElement.id[5])
    }

    const addHandler = e => {
        props.onAdd(e.currentTarget.parentElement.id[5])
    }

  return (
    <div className={classes['market-item-form__container']}>
        <form id={`form-${props.item.id}`} onSubmit={submitHandler} className={classes['market-item-form']}>
            <button className={`${classes['button-reset']}`} onClick={resetHandler}></button>
            <button className={`${classes.button} ${classes['button-remove']}`} onClick={removeHandler}></button>
            <input type="text" className={classes.display} value={props.item.amount} disabled='disabled' />
            <button className={`${classes.button} ${classes['button-add']}`} onClick={addHandler}></button>
        </form>
    </div>
  )
}

export default MarketItemForm;