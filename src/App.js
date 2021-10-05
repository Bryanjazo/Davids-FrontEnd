import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch></Switch>
      </div>
      ;
    </Router>
  );
}

export default App;
