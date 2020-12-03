import React, { Fragment } from 'react';
import styled from 'styled-components';

function ManagerInfo() {
  return (
    <Fragment>
      <Layout>
        <UserInfoLayout>
          <div className="UserInfoLayoutTop">
            {/* 방장 프로필 이미지 */}
            <UserProfileImage src="https://avatars2.githubusercontent.com/u/56405613?s=460&u=b1dc8505bf966d1364e9aecce175deaa42d6f7f9&v=4" />
            <UserProfileInfo>
              <div className="badge">매니저</div>
              {/* 방장 닉네임 */}
              <div className="userName">블루베리</div>
            </UserProfileInfo>
          </div>
          <div className="UserInfoLayoutBottom">
            {/* 방장 소개 글 */}
            <UserDesc>센스 만렙 찍고 싶은 애</UserDesc>
          </div>
        </UserInfoLayout>
      </Layout>
    </Fragment>
  );
}

export default ManagerInfo;
const UserDesc = styled.div`
  margin-top: 16px;
  width: 100%;
  font-size: 14px;
  color: #737373;
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
const Layout = styled.div`
  width: 100%;
  padding: 28px 20px 32px;
  box-sizing: border-box;
`;
