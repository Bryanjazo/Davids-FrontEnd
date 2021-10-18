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

        <div className='mobile-nav-container'>
        <HamburgerMenu/>
          </div>
          <div className='desktop-container'>
            <NavBar />
            <SubNavBar />
          </div>

         
          <Switch>
            <Route path="/example">
              <HamburgerMenu/>
            </Route>
            <Route path="/">
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
