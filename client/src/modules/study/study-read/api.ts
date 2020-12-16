import * as types from './types';
import axios from 'axios';

export async function readStudyApi(form: types.StudyForm) {
  const response = await axios.get('/project/show');
  return response.data;
}
