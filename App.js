import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React from "react";
import Home from "./Pages/Home";
import CustomNavigation from "./Components/Navigation";


function App() {
  return (
    <Router>
      <div className="App">
        <CustomNavigation />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
