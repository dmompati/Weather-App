import React from 'react';
import BioText from './Atoms/BioText';
import BioImage from './Atoms/BioImage';
import BioHeading from './Atoms/BioHeading';

const Bio = () =>{
    return(
        <div>
        <BioImage />
        <BioHeading />
        <BioText />
        </div>
    )
}

export default Bio;