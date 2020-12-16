import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import StudyPageCreate from './pages/StudyPage/StudyPageCreate';
import StudyPageRead from './pages/StudyPage/StudyPageRead';
import StudyPageUpdate from './pages/StudyPage/StudyPageUpdate';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/study-create" component={StudyPageCreate} />
        <Route path="/study-read" component={StudyPageRead} />
        <Route path="/study-update" component={StudyPageUpdate} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
