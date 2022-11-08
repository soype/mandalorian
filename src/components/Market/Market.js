import React, { useEffect, useState, useMemo } from "react";

import classes from "./Market.module.css";

import Blaster from "../../media/images/guns/blaster.png";
import HanSolo from "../../media/images/guns/han-solo.png";
import WingBlaster from "../../media/images/guns/wing-blaster.png";
import TieFighter from "../../media/images/ships/tie-fighter.png";
import XWing from "../../media/images/ships/x-wing.png";
import RazorCrest from "../../media/images/ships/razor-crest.png";
import Crib from "../../media/images/misc/crib.png";
import Helmet from "../../media/images/misc/helmet.png";
import Jetpack from "../../media/images/misc/jetpack.png";
import MenuItem from "./MenuItem";
import Display from "./Display/Display";

const Market = (props) => {
  const [selected, setSelected] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const [weapons, setWeapons] = useState([
        {
          name: "Blaster",
          price: 2500,
          amount: 0,
          id: 0,
          img: Blaster,
        },
        {
          name: "Hand blaster",
          price: 1500,
          amount: 0,
          id: 1,
          img: HanSolo,
        },
        {
          name: "Wing blaster",
          price: 1900,
          amount: 0,
          id: 2,
          img: WingBlaster,
        },
 
  ]);

  const [ships, setShips] = useState([

    {
      name: "Tie Fighter",
      price: 27000,
      amount: 0,
      id: 3,
      img: TieFighter,
    },
    {
      name: "X-Wing",
      price: 34000,
      amount: 0,
      id: 4,
      img: XWing,
    },
    {
      name: "Razor Crest",
      price: 18500,
      amount: 0,
      id: 5,
      img: RazorCrest,
    },
  ]);

  const [misc, setMisc] = useState([
    {
      name: "Crib",
      price: 1200,
      amount: 0,
      id: 6,
      img: Crib,
    },
    {
      name: "Helmet",
      price: 11000,
      amount: 0,
      id: 7,
      img: Helmet,
    },
    {
      name: "Jetpack",
      price: 7000,
      amount: 0,
      id: 8,
      img: Jetpack,
    },
  ])

  const categories = useMemo(() => {
    return[
    {
      name: 'Weapons',
      data: weapons
    },
    {
      name:'Ships',
      data: ships
    },
    {
      name:'Misc',
      data: misc
    }
  ]}, [weapons, ships, misc])

  useEffect(() => {
    let amount = 0;
    for(let i=0; i < 3; i++){
      for(let x=0; x < 3; x++){
        amount += categories[i].data[x].amount * categories[i].data[x].price;
      }
    }
    setTotalAmount(amount);
  }, [categories])
  
  const selectorHandler = (id) => {
    setSelected(id);
  };

  const addHandler = id => {
    const sel = selected - 1;
    let oldAmount = 0; 
    for(let i=0; i<3; i++){
      if(categories[sel].data[i].id === id){
        oldAmount = categories[sel].data[i].amount;
      }
    }
    const newAmount = oldAmount + 1;
    if(newAmount >= 0){
      const newArray = categories[sel].data.map(item => {
        if(item.id === id){
          return{...item, amount: newAmount};
        }else{
          return item;
        }
      })
      if(sel === 0){
        setWeapons(newArray);
      }else if(sel === 1){
        setShips(newArray)
      }else if(sel === 2){
        setMisc(newArray)
      }
    }
  }

  const substractHandler = id => {
    const sel = selected - 1;
    let oldAmount = 0; 
    for(let i=0; i<3; i++){
      if(categories[sel].data[i].id === id){
        oldAmount = categories[sel].data[i].amount;
      }
    }
    const newAmount = oldAmount - 1;
    if(newAmount >= 0){
      const newArray = categories[sel].data.map(item => {
        if(item.id === id){
          return{...item, amount: newAmount};
        }else{
          return item;
        }
      })
      if(sel === 0){
        setWeapons(newArray);
      }else if(sel === 1){
        setShips(newArray)
      }else if(sel === 2){
        setMisc(newArray)
      }
    }
  }

  return (
    <div className={classes.market}>
      <div className={classes.menu}>
        <div className={classes.options}>
          {categories.map((item, index) => {
            return (
              <MenuItem
                key={index}
                params={item}
                onSelected={selectorHandler}
                itemId={index + 1}
                itemStyle={
                  index + 1 === selected ? "menu-item-selected" : "menu-item"
                }
              />
            );
          })}
        </div>
        <div className={classes.cart}>
          <h2
            id="4"
            onClick={() => setSelected(4)}
            className={
              classes[4 === selected ? "menu-item-selected" : "menu-item"]
            }
          >
            Cart
          </h2>
        </div>
        <div
          className={classes["menu-background"]}
          onClick={() => setSelected(0)}
        ></div>
      </div>
      <div className={classes.display}>
        {selected === 1 && <Display data={weapons} onAdd={addHandler} onSubstract={substractHandler}></Display>}
        {selected === 2 && <Display data={ships} onAdd={addHandler} onSubstract={substractHandler}></Display>}
        {selected === 3 && <Display data={misc} onAdd={addHandler} onSubstract={substractHandler}></Display>}
        <div className={classes.total}>
            {totalAmount}
        </div>
      </div>
    </div>
  );
};

export default Market;
