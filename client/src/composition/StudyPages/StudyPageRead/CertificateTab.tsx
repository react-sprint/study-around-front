import React, { Fragment } from 'react';
import styled from 'styled-components';
import CommentList from './CommentList';

function CertificateTab() {
  return (
    <Fragment>
      <Layout>
        <UserInfoLayout>
          <div className="UserInfoLayoutTop">
            {/* 유저 프로필 이미지 */}
            <UserProfileImage src="https://avatars2.githubusercontent.com/u/56405613?s=460&u=b1dc8505bf966d1364e9aecce175deaa42d6f7f9&v=4" />
            <UserProfileInfo>
              <div className="badge">매니저</div>
              {/* 유저 닉네임 */}
              <div className="userName">김어진</div>
            </UserProfileInfo>
          </div>
        </UserInfoLayout>
        <MyComment placeholder="" />
        <SubmitButton>등록</SubmitButton>
        <CommentList />
      </Layout>
    </Fragment>
  );
}

export default CertificateTab;
const SubmitButton = styled.div`
  cursor: pointer;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #6c51b4;
  font-size: 16px;
  margin-left: auto;
  width: 60px;
  height: 40px;
  background-color: #f6f2fe;
  border-radius: 5px;
  border: none;
`;
const UserProfileInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  .badge {
    border: 1px solid #ff6178;
    border-radius: 20px;
    margin: 2px 0 4px;
    padding: 0 5px;
    font-size: 10px;
    color: #ff6178;
  }
  .userName {
    font-size: 15px;
    font-weight: bold;
    color: #000;
  }
`;
const UserProfileImage = styled.div`
  min-width: 60px;
  min-height: 60px;
  margin-right: 12px;
  border: 1px solid #e5e5e5;
  border-radius: 15px;
  box-sizing: border-box;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% auto;
`;
const UserInfoLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  .UserInfoLayoutTop {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;
const MyComment = styled.textarea`
  outline: none;
  margin-top: 20px;
  width: 100%;
  height: 100px;
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
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 800px;
  padding: 28px 20px;
  box-sizing: border-box;
`;
