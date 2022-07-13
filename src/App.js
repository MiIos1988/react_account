import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
  }
}

export default App;
