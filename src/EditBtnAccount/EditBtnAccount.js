import React, { Component } from "react";

class EditBtnAccount extends Component {
  state = {
    account:{
      account: {
        id: "",
        name: "",
        lastname: "",
        phone: "",
        email: "",
      }
    }
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 offset-1">
            <h2 className="display4 m-4">Edit Account</h2>
            <div className="row">
              <div className="col-10 offset-1">
                <input
                  type="text"
                  id="id"
                  placeholder="id"
                  className="form-control"
                />
                <br />
                <input
                  type="text"
                  id="name"
                  placeholder="name"
                  className="form-control"
                />
                <br />
                <input
                  type="text"
                  id="lastname"
                  placeholder="lastname"
                  className="form-control"
                />
                <br />
                <input
                  type="text"
                  id="phone"
                  placeholder="phone"
                  className="form-control"
                />
                <br />
                <input
                  type="text"
                  id="email"
                  placeholder="email"
                  className="form-control"
                />
                <br />
                <br />
                <button className="btn btn-primary form-control">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditBtnAccount;
