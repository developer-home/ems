import { Axios } from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate=(useNavigate());

  const Login = () => {
    if(username==="admin" && password==="@2022!"){
      navigate('/Admin/Dashboard')
    }

    // Axios.post("http://localhost:8080/loginAdmin",{
    //   username: username,
    //   password: password,
    // }).then((resp) => {
    //   console.log(username, password)
    //   console.log(resp)
    // });
  };
  return (
    <div className="container-sm bg-secondary d-flex justify-content-center resize">
      <form className="p-4 mt-5">
        <h4 className="mb-3 text-info">ADMINISTRATOR ONLY!</h4>
        <label className="mt-3 fw-bold text-info" htmlFor="">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          onChange={(e)=>setUsername(e.target.value)}
          placeholder="Username"
        />
        <label className="mt-3 fw-bold text-info" htmlFor="">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          onChange={(e)=>setPassword(e.target.value)}
          placeholder="***********"
        />
        <div className="row mt-4 mb-5 ">
          <div className="col-md-6">
            <button onClick={Login} className="btn btn-primary">
              Proceed
            </button>
          </div>
          <div className="col-md-6">
            <button className="btn btn-danger">
              <Link className="text-white none" to={"/"}>
                Cancel
              </Link>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Login;
