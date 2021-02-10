import logo from './logo.svg';
import './App.css';
import './app.scss';
import { Button } from 'carbon-components-react';
import React from "react";
import { Route, Switch } from 'react-router-dom';
import LandingPage from "./Pages/components/LandingPage";
import {FridayWorkout, MondayWorkout, RecoverySession, SaturdayWorkout, WednesdayWorkout} from "./Pages";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/Monday" component={MondayWorkout} />
        <Route exact path="/Tuesday" component={RecoverySession} />
        <Route exact path="/Wednesday" component={WednesdayWorkout} />
        <Route exact path="/Thursday" component={RecoverySession} />
        <Route exact path="/Friday" component={FridayWorkout} />
        <Route exact path="/Saturday" component={SaturdayWorkout} />
        <Route exact path="/Sunday" component={RecoverySession} />
      </Switch>
    </div>
  );
}

export default App;
