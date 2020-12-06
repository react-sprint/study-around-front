import React, { Fragment, useState } from 'react';
import CreateForm from './CreateForm';
import PasswdForm from './PasswdForm';
import CompleteBlock from './CompleteBlock';
import { useDispatch } from 'react-redux';
import { saveStudyForm } from '../../../modules/study';

function FormContainer() {
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    title: '',
    descStudy: '',
    descAuth: '',
    descManager: '',
    startHour: '',
    startMinutes: '',
    endHour: '',
    endMinutes: '',
  });
  const formItemCount = (key: string) => {
    return form[key].length;
  };

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const onSave = () => {
    if (Object.values(form).includes('')) {
      alert('입력 다 해라.');
    } else {
      dispatch(saveStudyForm(form));
      setStep(2);
    }
  };

  return (
    <Fragment>
      {step === 1 && (
        <CreateForm
          handleForm={handleForm}
          onSave={onSave}
          formItemCount={formItemCount}
        />
      )}
      {step === 2 && <PasswdForm setStep={setStep} />}
      {step === 3 && <CompleteBlock />}
    </Fragment>
  );
}

export default FormContainer;
