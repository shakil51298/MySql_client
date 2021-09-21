import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { userContext } from "../../App";
import 'react-toastify/dist/ReactToastify.css';

const UpdateForm = () => {
  const [context] = useContext(userContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastNfame] = useState("");
  const [year, setYear] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const submitForm = (e) => {
    const fNm = e.target[0].value;
    const lNm = e.target[1].value;
    const year = e.target[2].value;
    const phn = e.target[3].value;
    // console.log(fNm, lNm, year, phn);
    axios
      .put("http://localhost:5000/update/studentinfo/", {
        id: context.id,
        firstName: fNm,
        lastName: lNm,
        year: year,
        phoneNumber: phn,
      })
      .then((res) => {
        toast.success("🦄 Wow updated!!!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    console.log("data updated!!");

    e.preventDefault();
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
      <form action="" onSubmit={submitForm}>
        <table class="table">
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  name="fName"
                  placeholder="First Name"
                  defaultValue={context.first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="lName"
                  placeholder="Last Name"
                  defaultValue={context.last_name}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="year"
                  placeholder="Year"
                  defaultValue={context.year}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="phn"
                  placeholder="phone Number"
                  defaultValue={context.phone_number}
                />
              </td>
              <td>
                <button class="btn btn-sm btn-primary w-100">ADD</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default UpdateForm;
