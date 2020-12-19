import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { projectsRequest } from '../../modules/ProjectsModule';
import MainPresentation from './MainPresentation';

function MainContainer(): JSX.Element {
  const dispatch = useDispatch();
  // const [projects, setProjects] = useState(null);
  // const [form, setForm] = useState({
  //   token: '',
  // });
  // const { token } = form;
  const projects = useSelector((state: any) => state.projects);
  useEffect(() => {
    dispatch(projectsRequest());
    // const response = await dispatch(projectsSuccess())
    console.log('MainContainer', projects);
    // setProjects(response);
  }, []);

  return <MainPresentation projects={projects} />;
}

export default MainContainer;
