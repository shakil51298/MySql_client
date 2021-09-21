import React, { useState } from "react";
import { Link } from "react-router-dom";

const UpdateForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastNfame] = useState("");
  const [year, setYear] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  console.log(firstName, lastName, year, phoneNumber);
  const handleFistName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastNfame(e.target.value);
  };

  const handleYear = (e) => {
    setYear(e.target.value);
  };

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleUpdateSubmit = () => {
    console.log("update catching");
  };

  return (
    <div className="container mt-5">
      <div className="align-items-center d-flex justify-content-between ">
        <div className="">
          <a
            href="https://github.com/shakil51298/mySql_client"
            className="btn btn-sm btn-secondary"
          >
            Source Code
          </a>
        </div>
        <div className="border p-2">
          <Link className="btn btn-sm btn" to="/">
            <h1>
              <span className="text-warning">MySQl</span>
              <span className="text-info">Todo</span>
              <span className="text-danger">App</span>
            </h1>
          </Link>
        </div>
        <div className="">
          <button className="btn btn-sm btn-secondary">My Portfolio</button>
        </div>
      </div>
      <div className="mt-3">
        <h2 className="text-danger text-center">Update</h2>
      </div>
      <table class="table">
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                name="fName"
                placeholder="First Name"
                onBlur={(e) => handleFistName(e)}
                defaultValue="sdsd"
              />
            </td>
            <td>
              <input
                type="text"
                name="lName"
                placeholder="Last Name"
                onBlur={(e) => handleLastName(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="year"
                placeholder="Year"
                onBlur={(e) => handleYear(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="phn"
                placeholder="phone Number"
                onBlur={(e) => handlePhoneNumber(e)}
              />
            </td>
            <td>
              <button
                class="btn btn-sm btn-primary w-100"
                onClick={(e) => handleUpdateSubmit(e)}
              >
                ADD
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UpdateForm;
