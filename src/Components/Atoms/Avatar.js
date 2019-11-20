import React from 'react';
import Image from '../../img/images.jpeg'

const Avatar = ({ image, ...props }) => {
  return <img src={Image} alt="Weather Person Avatar" className="Avatar"/>;
};

export default Avatar;
