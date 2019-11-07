import React from 'react';

const WeatherIcon = ({ icon, ...props }) => {
  return <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>;
};

export default WeatherIcon;
