import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import UserInteractionList from "./components/user-interaction-list.component.js";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h2>User Interaction App</h2>
              <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/" className="nav-link">User Interactions</Link>
                  </li>
                </ul>
              </div>
              </nav>
            <Route path ="/" exact component={UserInteractionList} />
         
        </div>
      </Router>
    );
  }
}

export default App;
