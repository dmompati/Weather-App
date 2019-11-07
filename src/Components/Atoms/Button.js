import React from 'react';
import './Button.css';


const Button = ({ onButtonClick, ...props }) => {
  return <button onClick={onButtonClick} className="MainButton">{props.children}</button>;
};

export default Button;
