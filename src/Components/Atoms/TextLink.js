import React from 'react';
import './TextLink.css';


const TextLink = ({ onButtonClick, ...props }) => {
  return (
    <div>
      <button onClick={onButtonClick} className="TextLink">{props.children}</button>
    </div>
  );
};

export default TextLink;
