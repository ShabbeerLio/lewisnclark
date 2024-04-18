import React from 'react'
import "./FormFloat.css"
import ContactForm from '../Footer/ContactForm'

const FormFloat = (props) => {
    return (
        <div className='formfloat'>
            <div className='formfloat-main'>
                <div className="floatform-card">
                    <div className="formfloat-button">
                        <p onClick={props.formIsClose}> X</p>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default FormFloat
