import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { userContext } from "../../App";

const StudentTable = () => {
  const [studentData, setStudentData] = useState([]);
  const [context, setContext] = useContext(userContext);

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
          toast.success("Congratulations!!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    }
  };

  const handleUpdateStudentInfo = (id) => {
    const student = studentData.filter((sd) => sd.id == id);
    setContext(student[0]);
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
            <th scope="col" className="text-warning">
              Update Setting
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
              <td>
                <Link
                  onClick={() => handleUpdateStudentInfo(student.id)}
                  className="btn text-warning"
                  to="/student/info/update"
                >
                  Update
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-center text-muted">MD KAHLID HOSSAIN(李开文) © 2021</p>
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

export default StudentTable;
