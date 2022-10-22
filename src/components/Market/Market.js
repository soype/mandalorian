import React, {useState} from 'react';

import classes from './Market.module.css';

import MarketItem from './MarketItem/MarketItem';
import MarketItemForm from './MarketItem/MarketItemForm';
import MarketForm from './MarketForm';

const Market = () => {

  const [items, setItems] = useState([
    {
      name: 'Helmet',
      desc: 'Made from pure beskar. Deflects every danger',
      price: 34.99,
      id: 1,
      amount: 0
    },
    {
      name: 'Crib',
      desc: 'Perfect when you need to transport misterious aliens',
      price: 49.99,
      id: 2,
      amount: 0
    },
    {
      name: 'Rifle',
      desc: 'Ever tried hiting a womp rat? Super fun!',
      price: 29.99,
      id: 3,
      amount: 0
    },
    {
      name: 'Ship',
      desc: "It's been to places, but it'll get you where you're going",
      price: 399.99,
      id: 4,
      amount: 0
    },
  ])

  const resetHandler = id => {
    const newArray = items.map(item => {
      if(item.id == id){
        return {...item, amount: 0};
      }else{
        return item;
      }
    })
    setItems(newArray)
  }

  const removeHandler = id => {
    let oldAmount = items[id-1].amount;
    let newAmount = oldAmount - 1;
    if(oldAmount >= 1){
      const newArray = items.map(item => {
        if(item.id == id){
          return {...item, amount: newAmount};
        }else{
          return item;
        }
      })
      setItems(newArray)
    }
    
  }

  const addHandler = id => {
    const oldAmount = items[id-1].amount;
    const newAmount = oldAmount + 1;
    const newArray = items.map(item => {
      if(item.id == id){
        return {...item, amount: newAmount};
      }else{
        return item;
      }
    })
    setItems(newArray)
    
  }

  return (
    <div className={classes.market}>
      <div className={classes.items}>
        {items.map((item) => {
          return(
          <div className={classes['market-item-container']}>
            <MarketItem key={item.id} item={item}></MarketItem>
            <MarketItemForm onReset={resetHandler} onRemove={removeHandler} onAdd={addHandler} key={item.id+'form'} item={item}></MarketItemForm>
          </div>
          )
        })}
      </div>
      <MarketForm items={items}></MarketForm>
    </div>
  )
}

export default Market;