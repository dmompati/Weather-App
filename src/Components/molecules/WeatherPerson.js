import React from 'react';
import Avatar from '../atoms/Avatar';
import Profile from '../atoms/Profile';
import './WeatherPerson.css'

const WeatherPerson = () => {
  return (
    <div className="weather-person">
      <Avatar />
      <Profile />
    </div>
  );
};

export default WeatherPerson;
