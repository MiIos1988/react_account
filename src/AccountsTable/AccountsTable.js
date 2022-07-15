import React from "react";
import Account from "../Accaunt/Account";

const AccountsTable = ({ accounts }) => {
  const allAccount = accounts.map((account) => {
    return <Account account={account} key={account.id} />;
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1">
          <h3 className="display-4 m-4">Accounts </h3>
          <div className="row">
            <div className="col-10 offset-1">
              <table className="table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Lastname</th>
                    <th>Phone</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>{allAccount}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountsTable;
