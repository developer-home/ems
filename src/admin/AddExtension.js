import React from 'react'

const AddExtension = () => {
  return (
    <div>
      <form className="container mt-5 ml-5 mr-5 mb-5 p-5" action="">
        <p className="fw-bolder">Create a new Extension</p>
        <input
          type="text"
          className="form-control mt-5"
          placeholder="Name"
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
        <input
          type="text"
          className="form-control mt-3"
          placeholder="Department"
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
        <input
          type="text"
          className="form-control mt-3"
          placeholder="Extension"
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