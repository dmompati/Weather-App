import React from 'react';
import DayTemp from './Molecules/DayTemp';
import Label from './Atoms/Label';
import RedirectionLink from './Atoms/RedirectionLink';
import HourlyTemp from './Molecules/HourlyTemp';


const WeatherView = () =>{
    return(
        <div>
        <DayTemp />
        <HourlyTemp />
        <DayTemp />
        <DayTemp />
        <DayTemp />
        <DayTemp />
        <DayTemp />
        <DayTemp />
        <Label />
        <RedirectionLink />
        </div>
    )
}

export default WeatherView;