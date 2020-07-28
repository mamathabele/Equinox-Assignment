import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Link } from "react-router-dom";
import ChartsPage from "./components/chart";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route>
            <Home></Home>
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}
