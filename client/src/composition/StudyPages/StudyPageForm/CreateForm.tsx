import React, { Fragment } from 'react';
import styled from 'styled-components';
import TimeSelect from './TimeSelect';

interface FormProps {
  handleForm: (key: string, value: string | number) => void;
  onSaveInfo: () => void;
  formItemCount: (string) => number;
}

function CreateForm({ handleForm, onSaveInfo, formItemCount }: FormProps) {
  return (
    <Fragment>
      <Layout>
        <FormArea>
          <div className="formHeader">
            <div className="title">1. 프로젝트 이름 ✏️</div>
            <div className="letterNum">{formItemCount('title')}/30자</div>
          </div>
          <FormTextArea
            name="title"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleForm(e.target.name, e.target.value);
            }}
            placeholder="예) 리액트 스터디"
            height="40px"
          ></FormTextArea>
        </FormArea>
        <FormArea>
          <div className="formHeader">
            <div className="title">2. 프로젝트 소개 📝</div>
            <div className="letterNum">{formItemCount('descStudy')}/100자</div>
          </div>
          <FormTextArea
            name="descStudy"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleForm(e.target.name, e.target.value);
            }}
            placeholder="예) 리액트 출석 스터디 입니다!"
            height="100px"
          ></FormTextArea>
        </FormArea>

        <FormArea>
          <div className="formHeader">
            <div className="title">3. 프로젝트 인증방법 📍</div>
            <div className="letterNum">{formItemCount('descAuth')}/60자</div>
          </div>
          <FormTextArea
            name="descAuth"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleForm(e.target.name, e.target.value);
            }}
            placeholder="예) 댓글을 통해 출석하기"
            height="100px"
          ></FormTextArea>
        </FormArea>

        <FormArea>
          <div className="formHeader">
            <div className="title">3. 프로젝트 인증시간 ⏱</div>
          </div>
          <TimeSelect handleForm={handleForm} />
        </FormArea>
        <FormArea>
          <div className="formHeader">
            <div className="title">4. 매니저 소개 👨‍🚀</div>
            <div className="letterNum">
              {formItemCount('descManager')}/100자
            </div>
          </div>
          <FormTextArea
            name="descManager"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleForm(e.target.name, e.target.value);
            }}
            placeholder="예) 매일 리엑트 공부를 통해 성장을 하고 싶어요!"
            height="100px"
          ></FormTextArea>
        </FormArea>

        <SubmitButton
          onClick={() => {
            onSaveInfo();
          }}
        >
          생성하기
        </SubmitButton>
      </Layout>
    </Fragment>
  );
}

export default CreateForm;
const SubmitButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #fff;
  font-size: 18px;
  width: 150px;
  height: 50px;
  background-color: #5c68ff;
  border-radius: 5px;
  border: none;
`;
const FormTextArea = styled.textarea`
  outline: none;
  margin-top: 20px;
  width: 100%;
  height: ${(props) => props.height};
  resize: none;
  padding: 10px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  box-sizing: border-box;
  &::placeholder {
    color: #737373;
    font-weight: bold;
  }
`;
const FormArea = styled.div`
  width: 100%;
  padding: 20px 0px;
  box-sizing: border-box;
  .formHeader {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: #737373;
    .title {
      font-size: 16px;
      font-weight: bold;
    }
    .letterNum {
      font-weight: bold;
      font-size: 12px;
    }
  }
`;

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 200px;
  padding: 32px 16px;
  box-sizing: border-box;
  background-color: #f6f5f9;
`;
