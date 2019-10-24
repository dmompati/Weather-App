import React from 'react';
import Temp from '../Atoms/Temp';
import Icon from '../Atoms/Icon';

const Hourly = (Icon, Temp, ...props) =>{
    return(
        <div>
        <Icon icon = {Icon}/>
        <Temp temp = {Temp}/>
        </div>
    )
}

export default Hourly;