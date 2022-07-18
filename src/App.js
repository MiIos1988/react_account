import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import AccountsTable from "./AccountsTable/AccountsTable";
import AddAccount from "./AddAccount/AddAccount";

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
  addNewAccountToState = (acc) => {
    this.setState({
      account: [...this.state.account, acc],
    });
  };
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<AccountsTable accounts={this.state.account} />}
          />
          <Route
            path="/Add_account"
            element={
              <AddAccount addNewAccountToState={this.addNewAccountToState} />
            }
          />
        </Routes>
      </Router>
    );
  }
}

export default App;
