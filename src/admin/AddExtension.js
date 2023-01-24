import React, { useState } from 'react'

const AddExtension = () => {

  const [fullname, setFullname]=useState("");
  const [department, setDepartment]=useState("");
  const [extension, setExtension]=useState("");
  
  return (
    <div>
      <form className="container mt-5 ml-5 mr-5 mb-5 p-5" action="">
        <p className="fw-bolder">Create a new Extension</p>
        <input
          type="text"
          className="form-control mt-5"
          placeholder="Name"
          onChange={(e)=>setFullname(e.target.value)}
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
        <input
          type="text"
          className="form-control mt-3"
          placeholder="Department"
          onChange={(e)=>setDepartment(e.target.value)}
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
        <input
          type="text"
          className="form-control mt-3"
          placeholder="Extension"
          onChange={(e)=>setExtension(e.target.value)}
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
        <button type="button" className="btn btn-primary mt-4 d-flex justify-content-center ">
          Add Extension
        </button>
      </form>
    </div>
  )
}

export default AddExtension