import React from 'react';
import './CurrentTemperature.css';


const CurrentTemperature = ({ temperature, ...props }) => {
  return <div className="CurrentTemp">{Math.round(temperature)} &deg;</div>;
};

export default CurrentTemperature;
