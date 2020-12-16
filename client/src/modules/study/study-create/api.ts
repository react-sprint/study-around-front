import * as types from './types';
import axios from 'axios';

export async function createStudyApi(form: types.StudyForm) {
  const response = await axios.post('/project/create', {
    project: {
      name: form.title,
      introduce: form.descStudy,
      manager_introduce: form.descManager,
      strat_hour: form.startHour,
      strat_minute: form.startMinutes,
      end_hour: form.endHour,
      end_minute: form.endMinutes,
    },
  });
  return response.data;
}
