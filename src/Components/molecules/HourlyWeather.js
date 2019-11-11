// Moment.js is a JS library that makes formatting dates in JS super easy!

import React from 'react';
import HourlyWeatherItem from './HourlyWeatherItem';
import moment from 'moment';

const HourlyWeather = ({ list, ...props }) => {
  return (
    <div className="lists">
    <ul>
      {list.map(item => (
        <HourlyWeatherItem
          key={item.dt}
          time={moment(item.dt_txt).format('h a')}
          icon={item.weather[0].icon}
          maxTemp={Math.round(item.main.temp_max)}
        />
      ))}
    </ul>
    </div>
  );
};

export default HourlyWeather;
