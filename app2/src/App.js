import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Sandeep from "./Sandeep";
import Murali from "./Murali";
import Home from "./Home";
import Navigation from "./Navigation";

function App() {
  return (
    <div className="App">
      <h2>Welcome to React Router App</h2>
      <Navigation />
      <Switch>
        <Route path="/sandeep" component={Sandeep} />
        <Route path="/murali" component={Murali} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
