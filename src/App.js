import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home";
import { Rotate } from "hamburger-react";
import Footer from "./Components/Footer/Footer";
import SubNavBar from "./Components/NavBar/SubNavBar";
import HamburgerMenu from "./Components/NavBar/HamburgerMenu";


function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <NavBar />
          <SubNavBar />
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/example">
              <HamburgerMenu/>
            </Route>
          </Switch>
        </div>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
