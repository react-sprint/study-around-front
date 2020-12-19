import axios from 'axios';
export async function signUpApi(form: any) {
  const response = await axios.post('http://localhost:3030/users', form);
  console.log('api response', response);
  return response.data;
}
//
//
