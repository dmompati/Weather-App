import React from 'react';
import './TextBox.css'

const TextBox = props => {
return (
 <div className="textbox">
     <p>{props.children}</p>
 </div>   


);
};

export default TextBox;
