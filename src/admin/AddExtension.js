import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddExtension = () => {
  const [FullNames, setFullname] = useState("");
  const [Department, setDepartment] = useState("");
  const [Extension, setExtension] = useState("");
  const navigate=useNavigate();

  const handleAddExtension = (e) => {
    const optn = {
      FullNames: FullNames,
      Department: Department,
      Extension: Extension,
    };
    if (!FullNames || !Department || !Extension) {
      toast.error("There is a missing field!!!", {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      axios.post("http://localhost:8080/extensions", optn).then(() => {
        toast.success("Extension added successfully!!!", {
          position: "top-center",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setTimeout(()=>navigate.push('/Admin/Dashboard'),500);
      });
    }
  };

  return (
    <div>
      <form className="container mt-5 ml-5 mr-5 mb-5 p-5" action="">
        <p className="fw-bolder">Create a new Extension</p>
        <input
          type="text"
          className="form-control mt-5"
          placeholder="Name"
          onChange={(e) => setFullname(e.target.value)}
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
        <input
          type="text"
          className="form-control mt-3"
          placeholder="Department"
          onChange={(e) => setDepartment(e.target.value)}
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
        <input
          type="text"
          className="form-control mt-3"
          placeholder="Extension"
          onChange={(e) => setExtension(e.target.value)}
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
        <button
          onClick={handleAddExtension}
          type="button"
          className="btn btn-primary mt-4 d-flex justify-content-center "
        >
          Add Extension
        </button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default AddExtension;
