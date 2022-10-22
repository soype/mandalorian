import React, {useState} from 'react'

import classes from './Header.module.css';

const HeaderMenu = (props) => {

    const [burgerClass, setBurgerClass] = useState(classes.burger);
    const [menuClass, setMenuClass] = useState(classes.menu)

    const burgerHandler = e => {
        if(e.currentTarget.classList[0].indexOf('clicked') === 14){
            setBurgerClass(classes.burger)
            setMenuClass(classes.menu)
        }else if(e.currentTarget.classList[0].indexOf('clicked') !== 1){
            setBurgerClass(`${classes['burger-clicked']} ${classes.burger}`)
            setMenuClass(`${classes.menu} ${classes['menu-active']}`)
        }
    }

    const menuSelectorHandler = (e) => {
        props.onChangeSelector(e.currentTarget.id)
    }

  return (
    <div className={classes['header-menu']}>
        <button className={burgerClass} onClick={burgerHandler} type='checkbox'>
            <div className={`${classes['line-1']} ${classes.line}`}></div>
            <div className={`${classes['line-2']} ${classes.line}`}></div>
            <div className={`${classes['line-3']} ${classes.line}`}></div>
        </button>
        <div className={menuClass}>
            <h3 className={classes['menu-item']} id='1' onClick={menuSelectorHandler}>Home</h3>
            <h3 className={classes['menu-item']} id='2' onClick={menuSelectorHandler}>Market</h3>
            <h3 className={classes['menu-item']} id='3' onClick={menuSelectorHandler}>About</h3>
        </div>
    </div>
  )
}

export default HeaderMenu;