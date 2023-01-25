import React, { useState } from "react";
import { Link } from "react-router-dom";

const EditExtension = () => {
  const [fullname, setFullName] = useState();
  const [department, setDepartment] = useState();
  const [extension, setExtension] = useState();

  const handleUpdate = () => {
    console.log(fullname + department + extension);
  };

  return (
    <div
      className="container card text-center m-5 bg-secondary"
      style={{ width: "500px" }}
    >
      <div className="card-header text-white fw-bold">
        <span>Edit Extension</span>
      </div>
      <div className="card-body">
        <form className="m-5" action="">
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              onChange={(event) => {
                setFullName(event.target.value);
              }}
              placeholder="FullName"
            />
          </div>
          <div class="form-group mb-3">
            <input
              type="text"
              className="form-control"
              onChange={(event) => {
                setDepartment(event.target.value);
              }}
              placeholder="Department"
            />
          </div>
          <div class="form-group mb-3">
            <input
              type="number"
              className="form-control"
              onChange={(event) => {
                setExtension(event.target.value);
              }}
              placeholder="Extension"
            />
          </div>
          <button onClick={handleUpdate} className="btn btn-primary p-1 me-2">
            Save Changes
          </button>
          <button className="btn btn-danger p-1">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default EditExtension;
