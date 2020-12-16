import axios from 'axios';

const Api = axios.create();
// client.defaults.baseURL = 'https://external-api-server.com/';
const Token = window.localStorage.getItem('token');
console.log(Token);
Api.defaults.headers.common['Authorization'] = Token ? Token : 'none';
export default Api;
//
