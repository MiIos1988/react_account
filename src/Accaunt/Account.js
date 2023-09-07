import React from "react";
import { Link } from "react-router-dom";

const Account = ({ account, edit, DeleteAccount }) => {
  const actionsButton = edit ? (
    <>
      <td>
        <button
          onClick={() => {
            DeleteAccount(account.id);
          }}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
      <td>
        <Link to={"/edit/" + account.id} className="btn btn-warning">
          Edit
        </Link>
      </td>
    </>
  ) : null;

  return (
    <tr>
      <td>{account.id}</td>
      <td>{account.name}</td>
      <td>{account.lastName}</td>
      <td>{account.phone}</td>
      <td>{account.email}</td>
      {actionsButton}
    </tr>
  );
};
export default Account;
