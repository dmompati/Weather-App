import React from 'react';
import CurrentCity from '../atoms/CurrentCity';
import CurrentTemperature from '../atoms/CurrentTemperature';
import TextLink from '../atoms/TextLink';
import './CurrentWeather.css';

const CurrentWeather = ({ city, temperature, onTextLinkClick, ...props }) => {
  return (
    <div className="CurrentWeather" style={{ backgroundImage: `url(/img/${city}.jpg),linear-gradient(rgba(56, 22, 119, 0.35),rgba(56, 22, 119, 0.35))` }}>
      <CurrentCity city={city} />
      <TextLink onButtonClick={onTextLinkClick}>Change City</TextLink>
      <CurrentTemperature temperature={Math.round(temperature)} />
      <div className="line"></div>
    </div>
  );
};

export default CurrentWeather;
