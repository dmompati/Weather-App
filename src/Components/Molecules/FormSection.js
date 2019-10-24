import React from 'react';
import FormInput from '../Atoms/FormInput';
import FormTextArea from '../Atoms/FormTextarea';

import Label from '../Atoms/Label';

const FormSection = ({Label, FormInput, type, name, ...props}) =>{
    return(
        <div>
        <Label label={Label}/>
        {type === 'text' && <FormInput name={name} />}
        {type === 'textarea' && <FormTextArea name={name} />}
        </div>
    )
}

export default FormSection;