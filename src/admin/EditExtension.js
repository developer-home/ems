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
    const fetchSingleExtension = async () => {
      const res=await axios.get(`http://localhost:8080/extensions/${id}`)
      setState(res.data);
    };
    fetchSingleExtension();
  }, [id]);

  

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8080/extensions/${id}`)
  //     .then((resp)=>{
  //       console.log(resp.response.data);
  //     })
  //     /*.then((resp) => setState(...resp.data[0]));
  //     console.log(response.data[0])*/
  // }, [id]);

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
      navigate('/Admin/Dashboard')
  };

  const handleChange = (e) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value });
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
        <form className="m-5" onSubmit={handleUpdate}>
          <div className="form-group mb-3">
            <input
              type="text"
              id="FullNames"
              className="form-control"
              name="FullNames"
              value={FullNames||""}
              onChange={handleChange}
              placeholder="FullName"
            />
          </div>
          <div class="form-group mb-3">
            <input
              type="text"
              id="Department"
              className="form-control"
              name="Department"
              value={Department||""}
              onChange={handleChange}
              placeholder="Department"
            />
          </div>
          <div class="form-group mb-3">
            <input
              type="number"
              id="Extension"
              className="form-control"
              name="Extension"
              value={Extension||""}
              onChange={handleChange}
              placeholder="Extension"
            />
          </div>
          <button type="submit" className="btn btn-primary p-1 me-2">
            Save Changes
          </button>
          <button className="btn btn-danger p-1">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default EditExtension;
