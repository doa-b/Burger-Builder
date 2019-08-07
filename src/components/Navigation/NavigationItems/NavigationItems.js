import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css'

/**
 * Created by Doa on 30-7-2019.
 */
const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link={"/"} exact>Burger Builder</NavigationItem>
        <NavigationItem link={"/orders"}>Orders</NavigationItem>
    </ul>
);



export default navigationItems;