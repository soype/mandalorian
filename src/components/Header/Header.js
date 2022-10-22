import React from 'react';

import HeaderMenu from './HeaderMenu';

import classes from './Header.module.css';

const Header = (props) => {
  const menuSelectorHandler = (id) => {
    props.onChangeSelector(id)
  }
  return (
    <div className={classes.header}>
        <h1 className={classes.logo}>The Mandalorian</h1>
        <HeaderMenu  onChangeSelector={menuSelectorHandler}></HeaderMenu>
    </div>
  )
}

export default Header;