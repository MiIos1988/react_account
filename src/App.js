import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import AccountsTable from "./AccountsTable/AccountsTable";

class App extends Component {
  state = {
    account: [
      {
        id: 1,
        name: "Danilo",
        lastname: "Vesovic",
        phone: "11-11-11",
        email: "danilo@gmail.com",
      },
      {
        id: 2,
        name: "Marko",
        lastname: "Markovic",
        phone: "11-22-11",
        email: "marko@gmail.com",
      },
    ],
  };
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<AccountsTable accounts={this.state.account}/>} />
        </Routes>
      </Router>
    );
  }
}

export default App;
