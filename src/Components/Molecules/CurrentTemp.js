import React from 'react';
import CityName from '../Atoms/CityName';
import CityImage from '../Atoms/CityImage';
import Temp from '../Atoms/Temp';

const CurrentTemp = () =>{
    return(
        <div>
        <CityName />
        <CityImage/>
        <Temp />
        </div>
    )
}

export default CurrentTemp;