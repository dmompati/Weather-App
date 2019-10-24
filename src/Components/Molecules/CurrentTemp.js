import React from 'react';
import CityName from '../Atoms/CityName';
import CityImage from '../Atoms/CityImage';
import Temp from '../Atoms/Temp';

const CurrentTemp = ({CityName, CityImage, Temp, ...props}) =>{
    return(
        <div>
        <CityName city = {CityName}/>
        <CityImage cityimage = {CityImage}/>
        <Temp temp = {Temp}/>
        </div>
    )
}

export default CurrentTemp;