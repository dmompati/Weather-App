import React from 'react';
import BioText from '../Atoms/BioText';
import BioImage from '../Atoms/BioImage';
import BioHeading from '../Atoms/BioHeading';

const Bio = ({BioHeading, BioImage, BioText, ...props}) =>{
    return(
        <div>
        <BioImage bioimage = {BioImage}/>
        <BioHeading bioheading = {BioHeading} />
        <BioText biotext = {BioText} />
        </div>
    )
}

export default Bio;