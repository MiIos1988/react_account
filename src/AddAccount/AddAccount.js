import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

class AddAccount extends Component {
  state = {
    NewAccaunt: {
      id: "",
      name: "",
      lastname: "",
      phone: "",
      email: "",
    },
  };
  changeHandler = (e) => {
    let id = e.target.id;
    let newAcconutCopy = { ...this.state.NewAccaunt };
    newAcconutCopy[id] = e.target.value;
    this.setState({ NewAccaunt: newAcconutCopy });
    // [e.target.placeholder]: e.target.value,
  };
  addNewAccaunt = () => {
    this.props.addNewAccountToState(this.state.NewAccaunt);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 offset-1">
            <h2 className="display-4 m-4">Add Account</h2>
            <div className="row">
              <div className="col-10 offset-1">
                <input
                  type="text"
                  id="id"
                  placeholder="id"
                  className="form-control"
                  onChange={this.changeHandler}
                />
                <br />
                <input
                  type="text"
                  id="name"
                  placeholder="name"
                  className="form-control"
                  onChange={this.changeHandler}
                />
                <br />
                <input
                  type="text"
                  id="lastname"
                  placeholder="lastname"
                  className="form-control"
                  onChange={this.changeHandler}
                />
                <br />
                <input
                  type="text"
                  id="phone"
                  placeholder="phone"
                  className="form-control"
                  onChange={this.changeHandler}
                />
                <br />
                <input
                  type="text"
                  id="email"
                  placeholder="email"
                  className="form-control"
                  onChange={this.changeHandler}
                />
                <br />
                <br />
                <button
                  className="btn btn-primary form-control"
                  onClick={this.addNewAccaunt}
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
export default AddAccount;
