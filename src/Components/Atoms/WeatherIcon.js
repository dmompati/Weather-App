import React from 'react';
import { WiDaySunny } from "react-icons/wi";

const WeatherIcon = ({ icon, ...props }) => {
  if (icon === '11d') {
    return (
      <div>{icon}</div>
)
  }
  
};

export default WeatherIcon;
/* <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>; */