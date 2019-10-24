import React from 'react';
import Day from '../Atoms/Day';
import MaxTemp from '../Atoms/MaxTemp';
import MinTemp from '../Atoms/MinTemp';
import Icon from '../Atoms/Icon';

const DailyWeather = ({Day, MaxTemp, MinTemp, Icon, ...props}) =>{
    return(
        <div>
        <Day  day = {Day}/>
        <MaxTemp maxtemp = {MaxTemp} />
        <MinTemp mintemp = {MinTemp} />
        <Icon icon = {Icon} />
        </div>
    )
}

export default DailyWeather;