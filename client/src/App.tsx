import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import StudyPageCreate from './pages/StudyPage/StudyPageCreate';
import StudyPageRead from './pages/StudyPage/StudyPageRead';
import StudyPageUpdate from './pages/StudyPage/StudyPageUpdate';
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/study-create" component={StudyPageCreate} />
        <Route path="/study-read" component={StudyPageRead} />
        <Route path="/study-update" component={StudyPageUpdate} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/signin" component={SigninPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
