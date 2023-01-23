import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container-sm bg-secondary d-flex justify-content-center resize">
      <form className="p-4 mt-5">
        <h4 className="mb-3 text-info">ADMINISTRATOR ONLY!</h4>
        <label className="mt-3 fw-bold text-info" htmlFor="">Username</label>
        <input type="text" className="form-control" placeholder="Username" />
        <label className="mt-3 fw-bold text-info" htmlFor="">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="***********"
        />
        <div className="row mt-4 mb-5 ">
          <div className="col-md-6">
            <button className="btn btn-primary"><Link  className='text-white none' to={'/Admin/Dashboard'}>Login</Link></button>
          </div>
          <div className="col-md-6">
            <button className="btn btn-danger"><Link  className='text-white none' to={'/'}>Cancel</Link></button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
