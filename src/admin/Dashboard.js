import React from "react";
import { BsMenuApp, BsPencil, BsTrash, BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import { InputGroup, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading]= useState(false);
  const [extension, setExtensions] = useState([]);

  useEffect(() => {
    const fetchExtensions = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:8080/extensions");
      setExtensions(res.data);
      setLoading(false);
    };
    fetchExtensions();
  }, []);
  return (
    <div className="container p-3 mt-3">
      <h3 className="text-orange">
        <BsMenuApp style={{ fill: "orange" }} /> Admin Control pannel
      </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, tenetur!
      </p>
      <form className="row">
        <div className="col-md-6">
          <InputGroup className="me-3">
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Filter by Extension"
            />
          </InputGroup>
        </div>
        <div className="col-md-6 d-flex justify-content-end">
          <button className="btn btn-success d-flex justify-content-end">
            <Link className="none text-white" to={"/Admin/%20%/AddNew"}>
              Add Extension
            </Link>
          </button>
        </div>
      </form>
      {
      loading ? <Spinner/> :
      <table className="table table-striped hover mt-3">
        <thead className="table-info">
          <tr className="row">
            <th className="col-md-2">#</th>
            <th className="col-md-3">Name</th>
            <th className="col-md-3">Department </th>
            <th className="col-md-2">Extension </th>
            <th className="col-md-2 d-flex justify-content-end">Action</th>
          </tr>
        </thead>
        <tbody>
          {extension.filter((item) => {
              return search.toLocaleLowerCase() === ""
                ? item
                : item.FullNames.toLocaleLowerCase().includes(search);
            }).map((ext) => [
            <tr className="row">
              <td className="col-md-2">{ext.id}</td>
              <td className="col-md-3">{ext.FullNames}</td>
              <td className="col-md-3">{ext.Department}</td>
              <td className="col-md-2">{ext.Extension}</td>
              <td className="col-md-2 d-flex justify-content-end">
                <button className="btn btn-success me-2">
                  <Link to={'/extension/edit/:id'}>
                  <BsPencil />
                  </Link>
                  
                </button>
                <button className="btn btn-danger ">
                  <BsTrash />
                </button>
              </td>
            </tr>,
          ])}
        </tbody>
      </table>
}
    </div>
  );
};

export default Dashboard;