import React from 'react';
import Bio from '../Molecules/Bio';
import Form from '../Molecules/Form';


const Complaint = (props) =>{
    return(
        <div>
        <Bio bio = {Bio}/>
        <Form form = {Form}/>
        </div>
    )
}

export default Complaint;