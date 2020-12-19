import Api from '../axiosConfig';
// import axios from 'axios';

export async function projectsApi() {
  const response = await Api.get('http://localhost:3030/project/list');
  console.log('api response', response);
  return response.data;
}
//
//
