import React from 'react';
import './form_errors.css'

export const FormErrors = ({formErrors}) =>
    <div className='form-error'>
        {
            Object.keys(formErrors).map((fieldName, index) => {
                if (formErrors[fieldName].length > 0) {
                    return (
                        <p key={index}>{formErrors[fieldName]}</p>
                    )
                }

                return '';
            })
        }
    </div>