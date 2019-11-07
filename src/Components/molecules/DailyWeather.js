import React from 'react';
import WeatherIcon from '../atoms/WeatherIcon';
import HourlyWeather from './HourlyWeather';
import moment from 'moment'

const DailyWeatherItem = ({ date, icon, list, maxTemp, minTemp, ...props }) => {
  return (
    <div>
      <div className="todaysweather">
      <h3>{moment(date).format('dddd')}</h3>
      <div className="minandmax">
      <WeatherIcon icon={icon} />
      <div>{maxTemp} &deg;</div>
      <div>{minTemp} &deg;</div>
      </div>
      </div>
      <HourlyWeather list={list} />
    </div>
  );
};

export default DailyWeatherItem;
