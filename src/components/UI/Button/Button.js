import React from 'react';
import classes from './Button.module.css'

/**
 * Created by Doa on 26-7-2019.
 */
const button = (props) => (
    <button
        disabled={props.disabled}
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}>
        {props.children}
    </button>
);



export default button;