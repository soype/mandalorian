import React, {useState, useEffect} from 'react';

import classes from './Market.module.css';

const MarketForm = (props) => {

    const[totalAmount, setTotalAmount] = useState(0);


    useEffect(() => {
        let amount = 0;
        props.items.forEach(item => {
            amount += item.amount * item.price;
        });
        let newAmount = Math.round(amount * 100) / 100;
        setTotalAmount(newAmount);
    }, [props.items])


    const submitHandler = e => {
        e.preventDefault();
        props.resetAll()
    }

  return (
    <div className={classes['market-form-wrapper']}>
        <div className={classes['market-form-container']}>
            <form className={classes['market-form']} onSubmit={submitHandler}>
                <div className={classes['form-amount-container']}>
                    <label className={classes['amount-display-label']}>TOTAL AMOUNT</label>
                    <input disabled='disabled' className={classes['amount-display']} type="text" name="" id="" value={totalAmount} />
                </div>
                <input type="submit" className={classes['submit']} value="ORDER" name="" id="" />
            </form>
        </div>
    </div>
  )
}

export default MarketForm;