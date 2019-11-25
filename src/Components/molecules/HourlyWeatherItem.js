import React from 'react';
import WeatherIcon from '../atoms/WeatherIcon';



const HourlyWeather = ({ time, icon, maxTemp, ...props }) => {
  return (
    <li>
      <div>{time}</div>
      <WeatherIcon icon={icon} />
      <div>{Math.round(maxTemp)} &deg;</div>
    </li>
  );
};

export default HourlyWeather;
