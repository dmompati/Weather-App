import React from 'react';
import WeatherIcon from '../atoms/WeatherIcon';
import HourlyWeather from './HourlyWeather';
import moment from 'moment'
import './DailyWeather.css'

const DailyWeatherItem = ({ date, icon, list, maxTemp, minTemp, ...props }) => {
  return (
    <div>
      <div className="todaysweather">
      <h3>{moment(date).format('dddd')}</h3>
      <div className="minandmax">
      <WeatherIcon icon={icon} />
      <div className="minny">
      <div className="max">{maxTemp} &deg;</div>
      <div className="min">{minTemp} &deg;</div>
      </div>
      </div>
      </div>
      <HourlyWeather list={list} />
    </div>
  );
};

export default DailyWeatherItem;
