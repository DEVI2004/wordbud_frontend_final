import React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import "./style.css";

function UserHomeSlides() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const {id}=useParams();
  useEffect(() => {
    Axios.get("https://language-app-3v1c.onrender.com/AdminRoute/")
      .then((res) => {
        if (res.status === 200) setData(res.data);
        else Promise.reject();
      })
      .catch((err) => alert(err));
  }, []);

  const handleClick = (id2) => {

    navigate(`/content-show/${id}/${id2}`);
  };

  return (
    <div className="my-2">
      <div>
        <div
          className="row example gx-3 "
          style={{
            borderRadius: "25px",
            backgroundColor: "rgba(220,220,220,0.627)",
            height: "80vh",
            overflowY: "scroll",
          }}
        >
          {data.map((val) => (
            <div
              className="col-md-6 col-lg-6 col-xl-4"
              key={val._id}
              style={{ marginBottom: "20px" }}
            >
              <div
                className="card mt-5"
                style={{
                  borderRadius: "25px",
                  backgroundColor: "rgba(220,220,220,0.627)",
                  maxHeight: "90vh",
                  overflow: "hidden",
                }}
              >
                <div className="row justify-content-center">
                  <img
                    src={val.image}
                    className="mt-3 card-img-top"
                    alt="Loading"
                    style={{ height: "300px" }}
                  />
                </div>

                <div className="card-body">
                  <h5 className="card-title">Language Name: {val.name}</h5>
                </div>
                <div className="card-footer d-flex justify-content-center">
                  <button className="btn btn-success" onClick={() => handleClick(val._id)}>Explore Course</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserHomeSlides;
