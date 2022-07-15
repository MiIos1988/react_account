import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          Account app
        </Link>

        <div id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link " aria-current="page" to="/">
                Accounts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Add_account">
                Add Account
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/edit_delete">
                Edit/Delete
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
