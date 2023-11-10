import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const UserSubmissions = ({ userId }) => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    Axios.get(`https://language-app-3v1c.onrender.com/UserRoute/updateuser/${userId}`)
      .then((res) => {
        if (res.status === 200) {
          setSubmissions(res.data.submissions || []);
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  }, [userId]);

  return (
    <div>
      <div className="example " style={{ borderRadius: "25px", backgroundColor: "rgba(220,220,220,0.627)", height: "80vh", overflowY: "scroll" }}>
        <h2 style={{ textAlign: "center", fontFamily: "Gill Sans Extrabold" }}>Your Submissions</h2>
        {submissions.length === 0 ? (
          <h5 style={{ textAlign: "center", fontSize: "1.5rem", marginTop: "2rem" ,fontFamily:"Gill Sans Extrabold"}}>No submissions Yet</h5>
        ) : (
          <div className='d-flex justify-content-center'>
            <div className='col-xl-8 col-lg-10 col-12'>
              <div>
                <table style={{ width: "100%" }}>
                  <tr>
                    <th>Language Name</th>
                    <th>Submission Date</th>
                    <th>Submission Time</th>
                    <th>Marks</th>
                  </tr>
                  <tbody>
                    {submissions.map((submission, index) => (
                      <tr key={index}>
                        <td>{submission.language}</td>
                        <td>{submission.time.substring(0, 10)}</td>
                        <td>{submission.time.substring(11,)}</td>
                        <td>{submission.marks}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserSubmissions;
