import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import AccountsTable from "./AccountsTable/AccountsTable";
import Add_account from "./AddAccount/AddAccount";
import EditAcccount from "./EditAccount/EditAccount";
import EditBtnAccount from "./EditBtnAccount/EditBtnAccount";

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

  DeletAccount = (id) => {
    const accountsCopy = [...this.state.account];
    const newAccountCopy = accountsCopy.filter((account) => account.id !== id);
    this.setState({ account: newAccountCopy });
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
            element={
              <EditAcccount
                accaunts={this.state.account}
                DeletAccount={this.DeletAccount}
              />
            }
          />
            <Route path="/edit/:id" element={<EditBtnAccount Accounts={this.state.account}/>} />
        </Routes>
      </Router>
    );
  }
}

export default App;
