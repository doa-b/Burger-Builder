import React from 'react';
import classes from './NavigationItem.module.css'

/**
 * Created by Doa on 30-7-2019.
 */
const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <a href={props.link}
        className={props.active ? classes.active : null}>{props.children}</a>
    </li>
);

export default navigationItem;