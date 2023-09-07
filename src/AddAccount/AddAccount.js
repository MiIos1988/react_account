import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

class Add_account extends Component {
  state = {
    account: {
      id: "",
      name: "",
      lastName: "",
      phone: "",
      email: "",
    },
  };
  changeHandler = (e) => {
    let copyState = { ...this.state.account };
    copyState[e.target.id] = e.target.value;
    this.setState({
      account: copyState,
    });
  };

  saveAccount = () => {
    this.props.AddNewAccount(this.state.account);
    this.setState({
      account: {
        id: "",
        name: "",
        lastName: "",
        phone: "",
        email: "",
      },
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 offset-1">
            <h2 className="display4 m-4">Add Account</h2>
            <div className="row">
              <div className="col-10 offset-1">
                <input
                  type="text"
                  id="id"
                  placeholder="id"
                  className="form-control"
                  onChange={this.changeHandler}
                  value={this.state.account.id}
                />
                <br />
                <input
                  type="text"
                  id="name"
                  placeholder="name"
                  className="form-control"
                  onChange={this.changeHandler}
                  value={this.state.account.name}
                />
                <br />
                <input
                  type="text"
                  id="lastName"
                  placeholder="lastName"
                  className="form-control"
                  onChange={this.changeHandler}
                  value={this.state.account.lastName}
                />
                <br />
                <input
                  type="text"
                  id="phone"
                  placeholder="phone"
                  className="form-control"
                  onChange={this.changeHandler}
                  value={this.state.account.phone}
                />
                <br />
                <input
                  type="text"
                  id="email"
                  placeholder="email"
                  className="form-control"
                  onChange={this.changeHandler}
                  value={this.state.account.email}
                />
                <br />
                <br />
                <button
                  className="btn btn-primary form-control"
                  onClick={() => {
                    this.saveAccount();
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Add_account;
