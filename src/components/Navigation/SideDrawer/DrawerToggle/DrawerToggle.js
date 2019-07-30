import React from 'react';

import classes from './DrawerToggle.module.css'

/**
 * Created by Doa on 30-7-2019.
 */
const drawerToggle = (props) => (

        <div className={classes.DrawerToggle}
             onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
);

export default drawerToggle;