import React, { Fragment, useState } from 'react';
import CreateForm from './CreateForm';
import PasswdForm from './PasswdForm';
import CompleteBlock from './CompleteBlock';
function FormContainer() {
  const [step, setStep] = useState(1);
  return (
    <Fragment>
      {step === 1 && <CreateForm setStep={setStep} />}
      {step === 2 && <PasswdForm setStep={setStep} />}
      {step === 3 && <CompleteBlock />}
    </Fragment>
  );
}

export default FormContainer;
