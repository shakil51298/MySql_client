import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import StudentTable from "./StudentTable";

const Home = () => {
  const [firstName, setFname] = useState("");

  const [lName, setLname] = useState("");
  const [year, setYear] = useState("");
  const [phn, setPhn] = useState("");

  const SubmitTodo = () => {
    axios
      .post("http://localhost:5000/student/api/insert_student_info/", {
        fName: firstName,
        lName: lName,
        year: year,
        phn: phn,
      })
      .then((res) => {
        alert('Successfully added!!')
        setTimeout(window.location.reload(), 50000);
      });
  };

  return (
    <div className="mt-5 container">
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
          <h1>
            <span className="text-warning">MySQl</span>
            <span className="text-info">Todo</span>
            <span className="text-danger">App</span>
          </h1>
        </div>
        <div className="">
          <button className="btn btn-sm btn-secondary">My Portfolio</button>
        </div>
      </div>
      <table class="table">
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                name="fName"
                placeholder="First Name"
                onBlur={(e) => setFname(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                name="lName"
                placeholder="Last Name"
                onBlur={(e) => setLname(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                name="year"
                placeholder="Year"
                onBlur={(e) => setYear(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                name="phn"
                placeholder="phone Number"
                onBlur={(e) => setPhn(e.target.value)}
              />
            </td>
            <td>
              <button class="btn btn-sm btn-primary w-100" onClick={SubmitTodo}>
                ADD
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <StudentTable />
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

export default Home;
