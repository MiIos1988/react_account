import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import AccountsTable from "./AccountsTable/AccountsTable";
import Add_account from "./AddAccount/AddAccount";
import EditAcccount from "./EditAccount/EditAccount";

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
  AddNewAccount = (data) => {
    this.setState({
      account: [...this.state.account, data],
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
            element={<Add_account AddNewAccount={this.AddNewAccount} />}
          />
          <Route
            path="/edit_delete"
            element={<EditAcccount accaunts={this.state.account} />}
          />
        </Routes>
      </Router>
    );
  }
}

export default App;
