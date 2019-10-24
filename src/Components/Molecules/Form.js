import React from 'react';
import FormSection from './FormSection';
import FormTitle from '../Atoms/FormTitle';
import FormButton from '../Atoms/FormButton';


const Form = ({FormTitle, FormSection, FormButton, ...props}) =>{
    return(
        <div>
        <form>
        <FormTitle formtitle = {FormTitle} />
        <FormSection/>
        <FormSection/>
        <FormSection/>
        <FormButton formbutton = {FormButton}/>
        </form>
        </div>
    )
}

export default Form;