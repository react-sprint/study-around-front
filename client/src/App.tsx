import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import StudyPageCreate from "./pages/StudyPage/StudyPageCreate";
import StudyPageRead from './pages/StudyPage/StudyPageRead';
import StudyPageUpdate from './pages/StudyPage/StudyPageUpdate';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/StudyPageCreate" component={StudyPageCreate} />
        <Route exact path="/StudyPageUpdate" component={StudyPageUpdate} />
        <Route exact path="/StudyPageRead" component={StudyPageRead} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
