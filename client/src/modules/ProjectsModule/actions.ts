export const PROJECT_LIST_GET_REQUEST = 'project/PROJECT_LIST_GET_REQUEST';
export const PROJECT_LIST_GET_SUCCESS = 'project/PROJECT_LIST_GET_SUCCESS';
export const PROJECT_LIST_GET_ERROR = 'project/PROJECT_LIST_GET_ERROR';

export const projectsRequest = () => {
  return {
    type: 'PROJECT_LIST_GET_REQUEST',
  };
};

export const projectsSuccess = (projectsData: any) => {
  // window.localStorage.setItem('token', loginData['JWT token']);
  return {
    type: 'PROJECT_LIST_GET_SUCCESS',
    payload: projectsData,
  };
};

export const projectsError = (error) => {
  alert('프로젝트를 불러올 수 없습니다.');
  console.log(error);
  return {
    type: 'PROJECT_LIST_GET_ERROR',
    error,
  };
};
//
