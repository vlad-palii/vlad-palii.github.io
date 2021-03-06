import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import './App.scss';
import Home from './components/homeComponent'
import AirQuality from './components/airQulityComponent'
import CodingProblems from './components/codingProblems'

export default function App() {





  return (
    <div id="app" >
    {/* className="synthwave-i" bg-header-synthwave*/}
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <NavLink exact className="nav-link" activeClassName="active" to="/">CV</NavLink>
            </li>
            <li className="nav-item">
            <NavLink exact className="nav-link" activeClassName="active" to="/air-quality">Air Quality</NavLink>
            </li>
            <li className="nav-item">
            <NavLink exact className="nav-link" activeClassName="active" to="/coding-problems">Coding Problems</NavLink>
            </li>
            <li className="nav-item">
            <NavLink exact className="nav-link" activeClassName="active" to="/anguar-chat">Angular 8 Chat</NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <Route exact path="/" component={Home} />
      <Route exact path="/air-quality" component={AirQuality} />
      <Route exact path="/coding-problems" component={CodingProblems} />
      <Route exact path="/anguar-chat"  />
    </Router>

    </div>
  );
}