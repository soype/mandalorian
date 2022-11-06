import React from 'react';

import classes from './Market.module.css';

const MenuItem = (props) => {

    const selectorHandler = () =>{
        props.onSelected(props.itemId)
    }
    
    return (
        <h2 className={classes[props.itemStyle]} onClick={selectorHandler}>{props.params.name}</h2>
    )
}

export default MenuItem;