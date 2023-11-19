// import React from "react";
// import Axios from "axios";
// import { useEffect, useState } from "react";
// import {  useNavigate, useParams } from "react-router-dom";
// import "./style.css";

// function UserHomeSlides() {
//   const [data, setData] = useState([]);
//   const navigate = useNavigate();
//   const {id}=useParams();
//   useEffect(() => {
//     Axios.get("https://wordbud-backend.onrender.com/AdminRoute/")
//       .then((res) => {
//         if (res.status === 200) setData(res.data);
//         else Promise.reject();
//       })
//       .catch((err) => alert(err));
//   }, []);

//   const handleClick = (id2) => {

//     navigate(`/content-show/${id}/${id2}`);
//   };

//   return (
//     <div className="my-2">
//       <div>
//         <div
//           className="row example gx-3 "
//           style={{
//             borderRadius: "25px",
//             backgroundColor: "rgba(220,220,220,0.627)",
//             height: "80vh",
//             overflowY: "scroll",
//           }}
//         >
//           {data.map((val) => (
//             <div
//               className="col-md-6 col-lg-6 col-xl-4"
//               key={val._id}
//               style={{ marginBottom: "20px" }}
//             >
//               <div
//                 className="card mt-5"
//                 style={{
//                   borderRadius: "25px",
//                   backgroundColor: "rgba(220,220,220,0.627)",
//                   maxHeight: "90vh",
//                   overflow: "hidden",
//                 }}
//               >
//                 <div className="row justify-content-center">
//                   <img
//                     src={val.image}
//                     className="mt-3 card-img-top"
//                     alt="Loading"
//                     style={{ height: "300px" }}
//                   />
//                 </div>

//                 <div className="card-body">
//                   <h5 className="card-title">Language Name: {val.name}</h5>
//                 </div>
//                 <div className="card-footer d-flex justify-content-center">
//                   <button className="btn btn-success" onClick={() => handleClick(val._id)}>Explore Course</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserHomeSlides;

// import React from "react";
// import Axios from "axios";
// import { useEffect, useState } from "react";
// import {  useNavigate, useParams } from "react-router-dom";
// import "./style.css";

// function UserHomeSlides() {
//   const [data, setData] = useState([]);
//   const navigate = useNavigate();
//   const {id}=useParams();
//   useEffect(() => {
//     Axios.get("https://wordbud-backend.onrender.com/AdminRoute/")
//       .then((res) => {
//         if (res.status === 200) setData(res.data);
//         else Promise.reject();
//       })
//       .catch((err) => alert(err));
//   }, []);

//   const handleClick = (id2) => {

//     navigate(`/content-show/${id}/${id2}`);
//   };

//   return (
//     <div className="my-2">
//       <div>
//         <div
//           className="row example gx-3 "
//           style={{
//             backgroundColor: "rgba(220, 220, 220, 0.627)",
//             height: "80vh",
//             overflowY: "scroll",
//           }}
//         >
//           {data.map((val) => (
//             <div
//               className="col-md-6 col-lg-6 col-xl-4"
//               key={val._id}
//               style={{ marginBottom: "20px" }}
//             >
//               <div
//                 className="card mt-5"
//                 style={{
//                   backgroundColor: "rgba(220, 220, 220, 0.627)",
//                   maxHeight: "90vh",
//                   overflow: "hidden",
//                 }}
//               >
//                 <div className="row justify-content-center">
//                   <img
//                     src={val.image}
//                     className="mt-3 card-img-top"
//                     alt="Loading"
//                     style={{
//                       height: "300px",
//                       transition: "transform 0.2s ease-in-out",
//                     }}
//                     onMouseOver={(e) => {
//                       e.currentTarget.style.transform = "scale(1.1)";
//                     }}
//                     onMouseOut={(e) => {
//                       e.currentTarget.style.transform = "scale(1)";
//                     }}
//                   />
//                 </div>
  
//                 <div className="card-body">
//                   <h5 className="card-title">Language Name: {val.name}</h5>
//                 </div>
//                 <div className="card-footer d-flex justify-content-center">
//                   <button
//                     className="btn btn-success"
//                     onClick={() => handleClick(val._id)}
//                   >
//                     Explore Course
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
  
// }

// export default UserHomeSlides;

// import React from "react";
// import Axios from "axios";
// import { useEffect, useState } from "react";
// import {  useNavigate, useParams } from "react-router-dom";
// import "./style.css";
// import "./Cards.css"

// function UserHomeSlides() {
//   const [data, setData] = useState([]);
//   const navigate = useNavigate();
//   const {id}=useParams();
//   useEffect(() => {
//     Axios.get("https://wordbud-backend.onrender.com/AdminRoute/")
//       .then((res) => {
//         if (res.status === 200) setData(res.data);
//         else Promise.reject();
//       })
//       .catch((err) => alert(err));
//   }, []);

//   const handleClick = (id2) => {

//     navigate(`/content-show/${id}/${id2}`);
//   };

//   return (
//     <div className="my-2">
//       <div className="cards__container">
//         <div className="cards__wrapper">
//           <div className="row example gx-3 cards__items" style={{ backgroundColor: "rgba(220, 220, 220, 0.627)", minHeight: "80vh", overflowY: "scroll" }}>
//             {data.map((val) => (
//               <div className="col-md-6 col-lg-6 col-xl-4 cards__item" key={val._id} style={{ marginBottom: "10px", height: "500px" }}>
//                 <div className="cards__item__link" style={{ backgroundColor: "rgba(220, 220, 220, 0.627)", maxHeight: "90vh", overflow: "hidden", borderRadius: "10px", boxShadow: "0 6px 20px rgba(56, 125, 255, 0.17)", padding: "10px" }}>
//                   <div className="cards__item__pic-wrap" data-category="Language">
//                     <img
//                       src={val.image}
//                       className="cards__item__img fade-img"
//                       alt={val.name}
//                       style={{ width: "100%", height: "350px", objectFit: "cover", borderRadius: "10px 10px 0 0" }}
//                     />
//                   </div>
//                   <div className="cards__item__info" style={{ textAlign: "center", marginTop: "10px" }}>
//                     <h5 className="cards__item__text">Language Name: {val.name}</h5>
//                     <div className="d-flex justify-content-center mt-3">
//                       <button onClick={() => handleClick(val._id)} className="btn btn-success btn-lg" style={{ height: "50px", width: "200px", fontSize: "16px" }}>
//                         Explore Course
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
  
// }

// export default UserHomeSlides;

import React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import "./style.css";
import "./CourseCards.css"

function UserHomeSlides() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const {id}=useParams();
  useEffect(() => {
    Axios.get("https://wordbud-backend.onrender.com/AdminRoute/")
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
      <div className="cards__container">
        <div className="cards__wrapper">
          {data.map((val) => (
            <div className="cards__item" key={val._id}>
              <div className="cards__item__link">
                <div className="cards__item__pic-wrap" data-category="Language">
                  <img
                    src={val.image}
                    className="cards__item__img fade-img"
                    alt={val.name}
                  />
                </div>
                <div className="cards__item__info">
                  <h5 className="cards__item__text">Language Name: {val.name}</h5>
                  <div className="d-flex justify-content-center mt-3">
                    <button onClick={() => handleClick(val._id)} className="btn btn-success btn-lg">
                      Explore Course
                    </button>
                  </div>
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
