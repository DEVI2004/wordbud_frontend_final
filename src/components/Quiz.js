import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Quiz = ({ id, languagename, quizData }) => {
  const [userAnswers, setUserAnswers] = useState(new Array(quizData.length).fill(''));
  const [score, setScore] = useState(null);
  const [submissions, setSubmissions] = useState([]);

  const handleAnswerChange = (index, event) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = event.target.value;
    setUserAnswers(newAnswers);
  };

  const calculateScore = () => {
    return userAnswers.reduce((acc, answer, index) => {
      return answer === quizData[index][5] ? acc + 1 : acc;
    }, 0);
  };

  useEffect(() => {
    Axios.get(`https://language-app-3v1c.onrender.com/UserRoute/updateuser/${id}`)
      .then((res) => {
        if (res.status === 200) {
          setSubmissions(res.data.submissions || []); 
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  }, [id]);

  const handleSubmit = () => {
    const newScore = calculateScore();
    setScore(newScore);

    const newSubmission = {
      language: languagename,
      time: new Date().toLocaleString(),
      marks: newScore,
    };

    setSubmissions((prevSubmissions) => [...prevSubmissions, newSubmission]);
    Axios.put(`https://language-app-3v1c.onrender.com/UserRoute/updateuser/${id}`, {
      submissions: [...submissions, newSubmission],
    })
      .then((res) => {
        if (res.status === 200) {
          // console.log('User submissions updated successfully:', res.data);
        } else {
          // console.error('Failed to update user submissions:', res.data);
        }
      })
      .catch((err) => {
        console.error('Error updating user submissions:', err);
      });
  };

  const displayAnswers = () => {
    return quizData.map((question, index) => (
      <div key={index}>
        <br />
        <h5>{question[0]}</h5>
        <div>
          {question.slice(1, 5).map((option, optionIndex) => (
            <div key={optionIndex}>
              <label>
                {option}
              </label><br />
            </div>
          ))}
        </div><br />
        <p>Your Answer: {userAnswers[index]}</p>
        <p>Correct Answer: {question[5]}</p>
      </div>
    ));
  };

  return (
    <div>
      <div className="row h-100 justify-content-center mt-3">
        <div className="col-11 col-xl-9 ">
          <div className="example " style={{ borderRadius: "25px", backgroundColor: "rgba(220,220,220,0.627)", maxHeight: "75vh", overflowY: "scroll" }}>

            <div>
              <h2 style={{ textAlign: "center" }}>Quiz Questions</h2>
              <div style={{ paddingLeft: "10px" }}>
                {score !== null ? (
                  displayAnswers()
                ) : (
                  quizData.map((question, index) => (
                    <div key={index}>
                      <br /><h5>{question[0]}</h5>
                      <div>
                        {question.slice(1, 5).map((option, optionIndex) => (
                          <div key={optionIndex}>
                            <label>
                              <input
                                type="radio"
                                value={`Option ${String.fromCharCode(65 + optionIndex)}`}
                                checked={userAnswers[index] === `Option ${String.fromCharCode(65 + optionIndex)}`}
                                onChange={(event) => handleAnswerChange(index, event)}
                              />
                              {option}
                            </label><br />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className='mb-3' style={{ textAlign: "center" }}>
                {!score && (
                  <button onClick={handleSubmit} className="btn btn-primary ">Submit</button>
                )}
              </div>
              {score !== null && (
                <div style={{ textAlign: "center" }}>
                  <h3>Your Score: {score} / {quizData.length}</h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
