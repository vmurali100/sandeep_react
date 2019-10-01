import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import About from "./components/About";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/experience" component={Experience} />
      </Switch>
    </div>
  );
}

export default App;
