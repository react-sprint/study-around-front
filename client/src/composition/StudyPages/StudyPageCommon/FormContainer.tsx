import React, { Fragment,useState } from 'react'
import Form1 from './Form1'
import Form2 from './Form2'
import Form3 from './Form3'
function FormContainer() {
    const [step, setStep] = useState(1)
    return (
        <Fragment>
             {step===1 &&(
        <Form1 setStep={setStep}/>
        )}
        {step===2 &&(
        <Form2 setStep={setStep}/>)}
        {step===3 &&(
            <Form3/>)}
        </Fragment>
    )
}

export default FormContainer
