import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  FullNames: "",
  Department: "",
  Extension: "",
};

const EditExtension = () => {
  const [state, setState] = useState(initialState);

  const { FullNames, Department, Extension } = state;

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/extensions/${id}`)
      .then((resp) => setState(...resp.data[0]));
  }, [id]);

  const handleUpdate = () => {
    axios
      .put(`http://localhost:8080/extensions/${id}`, {
        FullNames,
        Department,
        Extension,
      })
      .then(() => {
        setState({ FullNames: "", Department: "", Extension: "" });
      })
      .catch((error) => toast.error(error.response.data));
      toast.success("Contact Updated Successfully!!");
  };
  const handleChange = (e) => {
    const { FullNames, value } = e.target;
    setState({ ...state, [FullNames]: value });
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
              value={FullNames || ""}
              onChange={handleChange}
              placeholder="FullName"
            />
          </div>
          <div class="form-group mb-3">
            <input
              type="text"
              className="form-control"
              value={Department || ""}
              onChange={handleChange}
              placeholder="Department"
            />
          </div>
          <div class="form-group mb-3">
            <input
              type="number"
              className="form-control"
              value={Extension || ""}
              onChange={handleChange}
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
