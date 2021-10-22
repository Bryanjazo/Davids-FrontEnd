import React, { useEffect } from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home";
import { Rotate } from "hamburger-react";
import Footer from "./Components/Footer/Footer";
import SubNavBar from "./Components/NavBar/SubNavBar";
import HamburgerMenu from "./Components/NavBar/HamburgerMenu";
import { getBlogs, getcryptos } from "./Redux/CryptoReduxer";
import BlogPost from "./Components/BlogContainer/BlogPost";
import AllPost from "./Components/BlogSanity/AllPost";
import OnePost from "./Components/BlogSanity/OnePost";
import AllBlogs from "./Components/LandingMenu/AllBlogs";
import SideNavBar from "./Components/SideNavBar/Sidenavbar";
import BlockchainMenu from "./Components/LandingMenu/BlockchainMenu";
import LifestyleMenu from "./Components/LandingMenu/LifestyleMenu";
import { useDispatch } from "react-redux";
import WritersMenu from "./Components/LandingMenu/WritersMenu";
import LearnCryptoMenu from "./Components/LandingMenu/LearnCryptoMenu";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogs());
    dispatch(getcryptos());

    // dispatch(getnewsArticles());
  }, [dispatch]);
  return (
    <div>
      <Router>
        <div className="App">
          <div className="mobile-nav-container">
            <SideNavBar />
          </div>

          <div className="desktop-container">
            <NavBar />
            <SubNavBar />
          </div>

          <Switch>
            <Route path="/Lifestyle">
              <LifestyleMenu />
            </Route>
            <Route path="/Writers-Feed">
              <WritersMenu />
            </Route>

            <Route path="/All-Blogs">
              <AllBlogs />
            </Route>

            <Route path="/Blockchain">
              <BlockchainMenu />
            </Route>

            <Route path="/Learn-Crypto">
              <LearnCryptoMenu />
            </Route>
            <Route component={AllPost} path="/Blogs" exact />
            <Route component={OnePost} path="/Blogs/:slug" />
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
