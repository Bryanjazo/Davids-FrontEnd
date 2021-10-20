import React from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home";
import { Rotate } from "hamburger-react";
import Footer from "./Components/Footer/Footer";
import SubNavBar from "./Components/NavBar/SubNavBar";
import HamburgerMenu from "./Components/NavBar/HamburgerMenu";
import BlogPost from "./Components/BlogContainer/BlogPost";
import AllPost from "./Components/BlogSanity/AllPost";
import OnePost from "./Components/BlogSanity/OnePost";
function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <div className="mobile-nav-container">
            <HamburgerMenu />
          </div>

          <div className="desktop-container">
            <NavBar />
            <SubNavBar />
          </div>

          <Switch>
            <Route path="/example">
              <HamburgerMenu />
            </Route>
            <Route component={AllPost} path="/Blogs" exact />
            <Route component={OnePost} path="/Blogs/:slug" />
            <Route path="/Blogs">
              <BlogPost />
            </Route>
            BlogPost
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
