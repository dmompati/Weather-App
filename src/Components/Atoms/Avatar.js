import React from 'react';
import Image from '../../img/images.jpeg'
import './Avatar.css'

const Avatar = ({ image, ...props }) => {
  return <img src={Image} alt="Weather Person Avatar" className="Avatar"/>;
};

export default Avatar;
