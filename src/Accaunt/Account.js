import React from "react";

const Account = ({ account, edit }) => {
  const actionsButton = edit ? (
    <>
      <td>
        <button className="btn btn-danger"></button>
      </td>
      <td>
        <button className="btn btn-warning"></button>
      </td>
    </>
  ) : null;

  return (
    <tr>
      <td>{account.id}</td>
      <td>{account.name}</td>
      <td>{account.lastname}</td>
      <td>{account.phone}</td>
      <td>{account.email}</td>
      {actionsButton}
    </tr>
  );
};
export default Account;
