import React from "react";
import Account from "../Accaunt/Account";

const EditAcccount = ({ accaunts }) => {
  const allAccount = accaunts.map((accaunt) => {
    return <Account accaunt={accaunt} edit={true} />;
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1">
          <h3 className="display-4 m-4">Edit accounts </h3>
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
                    <th>Action</th>
                    <th>Action</th>
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
export default EditAcccount;
