import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/signin" component={SigninPage} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
