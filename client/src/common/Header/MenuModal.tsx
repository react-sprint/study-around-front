import React from 'react';
import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';
import LabelTag from '../LabelTag';
import { Link } from 'react-router-dom';

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  position: fixed;
  z-index: 99;
`;

const MenuArea = styled.div`
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 100vh;
  width: 100%;
  background-color: white;
  max-width: 320px;
  z-index: 100;
`;

const MenuContainer = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: column;
`;

const MenuHeader = styled.div`
  display: flex;
  flex: 0.15;
  align-items: center;
  background-color: ${(props) => props.theme.title};
`;

const MenuList = styled.ul`
  display: flex;
  flex: 0.85;
  margin: 30px 20px 0px 20px;
  border-top: 2.5px solid #f2f2f2;
  padding: 20px 15px 0px 15px;
  flex-direction: column;
  .end-line {
    border-top: 2.5px solid #f2f2f2;
    margin: 25px 0px;
  }
`;

const ProfileIcon = styled(FaUser)`
  margin-left: 30px;
  width: 30px;
  height: 30px;
  padding: 18px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  background-color: ${(props) => props.theme.lightGray};
`;

const LogIOLabel = styled(LabelTag)`
  border-radius: 5px;
  padding: 4px 20px;
  font-weight: 700;
  margin-bottom: 7px;
  &.logout {
    border-radius: 25px;
  }
`;

const LoginArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin-left: 32px;
  .login-msg {
    font-size: 15px;
    color: rgba(255, 255, 255, 0.6);
  }
`;

const MenuItem = styled.li`
  font-size: 22px;
  padding: 8px 20px 9px;
  & + & {
    margin-top: 10px;
  }
`;

const UserName = styled.div`
  margin-bottom: 10px;
  margin-left: 20px;
  font-size: 25px;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
`;

const isLogin = false;

type MenuModalProps = {
  toggleMenuSwitch: (state: boolean) => void;
};

function MenuModal({ toggleMenuSwitch }: MenuModalProps) {
  return (
    <>
      <Overlay
        onClick={() => {
          toggleMenuSwitch(false);
        }}
      />
      <MenuArea>
        <MenuContainer>
          <MenuHeader>
            {/* 로그인 여부에 따라 프로필 사진 처리 필요 */}
            <ProfileIcon />
            {isLogin ? (
              <>
                <UserName>오승영</UserName>
              </>
            ) : (
              <>
                <LoginArea>
                  <LogIOLabel
                    className="login"
                    text={'로그인'}
                    textColor={'rgba(255, 255, 255, 0.8)'}
                    borderColor={'rgb(255, 255, 255, 0.8)'}
                    backgroundColor={'rgba(255, 255, 255, 0.05)'}
                    fontSize={'15px'}
                  />
                  <p className="login-msg">{'로그인해 주세요.'}</p>
                </LoginArea>
              </>
            )}
          </MenuHeader>
          <MenuList>
            <MenuItem>
              <Link to="/">마이페이지</Link>
            </MenuItem>
            <MenuItem>스터디 참가</MenuItem>
            <MenuItem>스터디 생성</MenuItem>
            {isLogin && (
              <>
                <div className="end-line" />
                <LogIOLabel
                  className="logout"
                  text={'로그아웃'}
                  textColor={'#8c8c8c'}
                  borderColor={'#8c8c8c'}
                  backgroundColor={'rgba(255, 255, 255, 0.05)'}
                  fontSize={'20px'}
                />
              </>
            )}
          </MenuList>
        </MenuContainer>
      </MenuArea>
    </>
  );
}

export default MenuModal;
