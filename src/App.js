import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home";
import { Rotate } from "hamburger-react";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route to="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
