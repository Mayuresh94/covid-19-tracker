import React from 'react';
import Home from './Pages/home';
import Map from './Pages/map'
import GlobalStats from './global-stats/global-stats'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {


  return (
    <Router>
      <div>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/map" component={Map} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
