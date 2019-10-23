import React from 'react';
import Day from '../Atoms/Day';
import MaxTemp from '../Atoms/MaxTemp';
import MinTemp from '../Atoms/MinTemp';
import Icon from '../Atoms/Icon';

const DailyWeather = () =>{
    return(
        <div>
        <Day />
        <MaxTemp />
        <MinTemp />
        <Icon />
        </div>
    )
}

export default DailyWeather;