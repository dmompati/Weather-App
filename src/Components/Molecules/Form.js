import React from 'react';
import FormSection from './FormSection';
import FormTitle from '../Atoms/FormTitle';
import FormButton from '../Atoms/FormButton';


const Form = () =>{
    return(
        <div>
        <FormTitle />
        <FormSection />
        <FormSection />
        <FormSection />
        <FormButton />
        </div>
    )
}

export default Form;