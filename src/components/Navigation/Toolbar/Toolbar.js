import React from 'react';
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

/**
 * Created by Doa on 30-7-2019.
 */
const toolbar = (props) => (
 <header className={classes.Toolbar}>
     <DrawerToggle clicked={props.drawerToggleClicked}/>
     <div className={classes.LogoHeight}>
     <Logo/>
     </div>
     <nav className={classes.DesktopOnly}>
         <NavigationItems isAuthenticated={props.isAuth}/>
     </nav>
 </header>
);

export default toolbar;