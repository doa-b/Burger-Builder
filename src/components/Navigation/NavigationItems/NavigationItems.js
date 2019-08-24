import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css'

/**
 * Created by Doa on 30-7-2019.
 */

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link={"/"} exact>Burger Builder</NavigationItem>
        {props.isAuthenticated ? <NavigationItem link={"/orders"}>Orders</NavigationItem> : null}
        {props.isAuthenticated
            ? <NavigationItem link={"/logout"}>Logout</NavigationItem>
            : <NavigationItem link={"/auth"}>Authentication</NavigationItem>}

    </ul>
);

export default navigationItems;