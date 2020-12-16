import axios from 'axios';
export async function signUpApi(form: any) {
  const response = await axios.post('/users', form);
  // console.log(response);
  return response.data;
}
//
