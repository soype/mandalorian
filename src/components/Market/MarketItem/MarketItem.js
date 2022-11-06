import React from "react";

import classes from "../Market.module.css";

const MarketItem = (props) => {
  return (
    <div className={classes["market-item"]}>
      <div className={classes["market-item__content"]}>
        <h3>{props.item.name}</h3>
        <p className={classes.desc}>{props.item.desc}</p>
        <p>{props.item.price}</p>
      </div>
      <div className={classes.wrapper}>
      </div>
      <div
          id={classes[`the-${props.item.id}`]}
          className={classes["market-item__background"]}
      ></div>     
    </div>
  );
};

export default MarketItem;
