import React, { Fragment } from 'react';
import styled from 'styled-components';

function CommentList() {
  const Dummy = [
    {
      user: '유재욱',
      comment: '출석완료!',
      image:
        'https://avatars1.githubusercontent.com/u/13144573?s=460&u=9042af1affd7da76dd24c6f12aa8660bdd4e42e5&v=4',
    },
    {
      user: '오승영',
      comment: '오~출석완료!',
      image:
        'https://avatars2.githubusercontent.com/u/46865281?s=460&u=9687af854c3f5ae8a8f8b1e4f10a87587eaf5626&v=4',
    },
    {
      user: '김어진',
      comment: '출석완료했습니다!',
      leader: true,
      image:
        'https://avatars2.githubusercontent.com/u/56405613?s=460&u=b1dc8505bf966d1364e9aecce175deaa42d6f7f9&v=4',
    },
  ];
  const RenderComments = Dummy.map((data, index) => {
    return (
      <Fragment key={index}>
        <UserCommentLayout>
          <UserInfoLayout>
            <div className="UserInfoLayoutTop">
              {/* 유저 프로필 이미지 */}
              <UserProfileImage src={data.image} />
              <UserProfileInfo>
                {data.leader && <div className="badge">매니저</div>}
                {/* 유저 닉네임 */}
                <div className="userName">{data.user}</div>
              </UserProfileInfo>
            </div>
          </UserInfoLayout>
          {/* 유저 댓글 */}
          <CommentArea>{data.comment}</CommentArea>
        </UserCommentLayout>
      </Fragment>
    );
  });
  return (
    <Fragment>
      <Layout>
        <Title>
          💪🏻 오늘의 출석현황
          <div className="certificateNum">총 {Dummy.length}명</div>
        </Title>
        {RenderComments}
      </Layout>
    </Fragment>
  );
}

export default CommentList;
const UserCommentLayout = styled.div`
  margin-bottom: 20px;
  width: 100%;
  box-sizing: border-box;
  padding: 16px 16px;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
`;
const CommentArea = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  color: #6c51b4;
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
  margin-bottom: 20px;
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
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #000;
  .certificateNum {
    font-size: 16px;
  }
`;
const Layout = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;
