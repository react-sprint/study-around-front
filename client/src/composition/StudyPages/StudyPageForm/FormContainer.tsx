import React, { Fragment, useState } from 'react';
import CreateForm from './CreateForm';
import PasswdForm from './PasswdForm';
import CompleteBlock from './CompleteBlock';
import { useDispatch, useSelector } from 'react-redux';
import { saveStudyInfo } from '../../../modules/study';
import { RootState } from '../../../modules';
import { saveStudyPassword } from '../../../modules/study';
import {
  createStudy,
  StudyCreateState,
} from '../../../modules/study/study-create';

function FormContainer() {
  const studyForm = useSelector((state: RootState) => state.study);
  const { loading, error }: StudyCreateState['createStatus'] = useSelector(
    (state: RootState) => state.createStudy.createStatus
  );

  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [studyInfo, setStudyInfo] = useState({
    title: '',
    descStudy: '',
    descAuth: '',
    descManager: '',
    startHour: -1,
    startMinutes: -1,
    endHour: -1,
    endMinutes: -1,
  });

  const [passwdObj, setPasswdObj] = useState({
    first_passwd: '',
    second_passwd: '',
    third_passwd: '',
    firth_passwd: '',
  });

  const formItemCount = (key: string) => {
    return studyInfo[key].length;
  };

  const handleForm = (key: string, value: string | number) => {
    setStudyInfo({
      ...studyInfo,
      [key]: value,
    });
  };

  const onSaveInfo = () => {
    if (Object.values(studyInfo).includes('')) {
      alert('모든 항목에 입력해주세요.');
    } else if (
      (studyInfo.startHour === studyInfo.endHour &&
        studyInfo.startMinutes === studyInfo.endMinutes) ||
      studyInfo.endHour < studyInfo.startHour
    ) {
      alert('시간을 제대로 입력하세요.');
    } else {
      dispatch(saveStudyInfo(studyInfo));
      setStep(2);
    }
  };

  const handdlePasswd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sequence = e.target.name;
    const inputPasswd = Number(e.target.value);
    // delete
    if (e.target.value === '') {
      setPasswdObj({ ...passwdObj, [sequence]: '' });
      return;
    }
    if (inputPasswd < 0 || inputPasswd > 9) {
      alert('올바른 암호를 입력해주세요.');
      e.target.value = '';
      setPasswdObj({ ...passwdObj, [sequence]: '' });
    } else {
      setPasswdObj({ ...passwdObj, [sequence]: e.target.value });
    }
  };

  const onSavePasswd = () => {
    let temp = '';
    for (const passwdKey in passwdObj) {
      const passwdElement = passwdObj[passwdKey];
      if (passwdElement === '') {
        // default number
        alert('암호를 모두 입력하세요');
        return;
      } else {
        temp += passwdElement;
      }
    }
    const studyPasswd = Number(temp);
    dispatch(saveStudyPassword(studyPasswd));
  };

  const onCreate = () => {
    dispatch(createStudy(studyForm));
  };

  return (
    <Fragment>
      {step === 1 && (
        <CreateForm
          handleForm={handleForm}
          onSaveInfo={onSaveInfo}
          formItemCount={formItemCount}
        />
      )}
      {step === 2 && (
        <PasswdForm
          setStep={setStep}
          handdlePasswd={handdlePasswd}
          onSavePasswd={onSavePasswd}
          onCreate={onCreate}
        />
      )}
      {step === 3 && <CompleteBlock />}
    </Fragment>
  );
}

export default FormContainer;
