import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = (props) => {
  
  var attatchedStyles = [styles.SideDrawer, styles.Close];
  if(props.open) {
    attatchedStyles = [styles.SideDrawer, styles.Open];
  }

  return(
    <Aux>
      <Backdrop show={props.open} clicked={props.closed}/> 
      <div className={attatchedStyles.join(' ')}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>   
  );
};

export default sideDrawer;