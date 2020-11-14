import React from "react";
import App from "./App";
import CommonPage from "../CommonPage";
import CheckVersion from "../CheckVersion";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const RouteMe = function(){
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/setting">setting</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
        </Switch>
      </div>
    </Router>
  )
};

CommonPage(CheckVersion(App,'0.12.1'),false,false);

