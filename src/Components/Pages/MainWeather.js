import React from 'react';
import WeatherHeader from '../Templates/WeatherHeader';
import WeatherView from '../Organisms/WeatherView';




const MainWeather = () =>{
    return(
        <div>
        <WeatherHeader />
        <WeatherView />
        </div>
    )
}

export default MainWeather;