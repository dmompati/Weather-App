import React from 'react';
import { Link } from 'react-router-dom';
import TextLink from '../components/atoms/TextLink';
import TextBox from '../components/atoms/TextBox';
import Forecast from '../components/organisms/Forecast';
import PageTemplate from '../components/templates/PageTemplate';

const WeatherPage = ({ city, temperature, changeCity, forecast, ...props }) => {
  return (
    <PageTemplate city={city} temperature={temperature} changeCity={changeCity}>
      <Forecast forecast={forecast} />
      <TextBox>Don't Like the weather?</TextBox>
      <Link to="/complain">
        <TextLink>Complain about the weather!</TextLink>
      </Link>
    </PageTemplate>
  );
};

export default WeatherPage;
