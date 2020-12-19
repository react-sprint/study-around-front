import Api from '../axiosConfig';
export async function loginApi(form: any) {
  const response = await Api.post('http://localhost:3030/auth_user', {
    auth: form,
  });
  console.log(response);
  return response.data;
}

// interface ProjectProps {}

export interface loginApiProps {
  'JWT token': string;
  userInfo: UserInfo;
}

interface UserInfo {
  id: number;
  email: string;
}
//
