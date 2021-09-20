import { render } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const StudentTable = () => {
  const [studentData, setStudentData] = useState([]);
  console.log(studentData);

  useEffect(() => {
    axios("http://localhost:5000/student/info/Get/").then((data) =>
      setStudentData(data.data)
    );
  }, []);

  const deleteStudentFromDb = (id) => {
    if (window.confirm("are you sure?")) {
      axios
        .delete(`http://localhost:5000/delete/studentinfo/${id}`)
        .then((res) => {
          // window.location.reload(true);
          axios("http://localhost:5000/student/info/Get/").then((data) =>
            setStudentData(data.data)
          );
          console.log(res);
        });
    }
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Year</th>
            <th scope="col">Phone Number</th>
            <th scope="col" className="text-danger">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student) => (
            <tr>
              <th>{student.id}</th>
              <td>{student.first_name}</td>
              <td>{student.last_name}</td>
              <td>{student.year}</td>
              <td>{student.phone_number}</td>
              <td>
                <button
                  className="btn text-danger"
                  onClick={() => deleteStudentFromDb(student.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-center text-muted">MD KAHLID HOSSAIN(李开文) © 2021</p>
    </div>
  );
};

export default StudentTable;
