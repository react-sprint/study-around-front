export const Signout = () => {
  window.localStorage.setItem('token', '');
  alert('로그아웃 됐습니다.');
};
