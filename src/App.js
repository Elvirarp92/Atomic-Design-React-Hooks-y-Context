import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { HomePage, AboutPage } from './components/paginas';
import { MobileContextProvider } from  "./contexts";

function App() {
  return (
    <Switch>
      <MobileContextProvider>
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={AboutPage} exact />
      </MobileContextProvider>
    </Switch>
  );
}


export default App;
