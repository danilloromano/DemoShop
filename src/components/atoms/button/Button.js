import React, { Component } from 'react';
import './Button.scss';

const Button = ({handleClick, text}) => {

        return (
        <div className="btn__wrapper">
            <button className="btn__default" onClick={handleClick}>
                {text}
            </button>
        </div>
        )
}

export default Button;
