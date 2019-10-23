import React, {Component} from 'react';

class CurrentWeather extends Component{
    constructor(){
        super();
        
    }
    render(){
        return(
        <div>
        <div>{this.props.temperature}</div>
        <div>{this.props.city}</div>
        </div>
        )
    }}


export default CurrentWeather;
