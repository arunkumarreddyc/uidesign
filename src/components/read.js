import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Alert } from "reactstrap";

export default function Read() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://6231fb9159070d9273408dd2.mockapi.io/crud1`)
      .then((getData) => {
        // console.log(getData.data);
        setApiData(getData.data);
      });
  }, [apiData]);

  const setID = (data) => {
    //   console.log(id)
    localStorage.setItem("id", data.id);
    localStorage.setItem("name", data.name);
    localStorage.setItem("designation", data.designation);
    localStorage.setItem("city", data.city);
  };

  const getData = (data) => {
    axios
      .get(`https://6231fb9159070d9273408dd2.mockapi.io/crud1`)
      .then((getData) => {
        setApiData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://6231fb9159070d9273408dd2.mockapi.io/crud1/${id}`)
      .then(() => {
        getData();
      });
  };
  return (
    <div>
      <table className="table table-primary  p-4 m-4 border border-info rounded-3 text-dark">
        <thead>
          <tr>
            <th colspan="4" className="bg bg-warning">
              Users Details
            </th>
            <Link to="/create">
              <th colspan="5" className=" ">
                add user
              </th>
            </Link>
          </tr>
          <tr className="text-light table-dark">
            <th>Name</th>
            <th>Designation</th>
            <th>City</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((data) => (
            <tr>
              <td>{data.name}</td>
              <td>{data.designation}</td>
              <td>{data.city}</td>

              <td>
                <Link to="/update">
                  <button
                    className="btn btn-success"
                    onClick={() => setID(data)}
                  >
                    Update
                  </button>
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onDelete(data.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
