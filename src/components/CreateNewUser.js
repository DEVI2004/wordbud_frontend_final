import { useState } from "react";
import { useNavigate } from 'react-router-dom';  
import './loginstyle.css';
import Axios from 'axios';  
import { Link } from "react-router-dom";
function CreateNewUser() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();  

    const handlelogin = () => {
        const url = 'https://wordbud-backend.onrender.com/UserRoute';

        if (!email.trim()) {
            alert("Please enter a valid email");
        } else {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    if (Array.isArray(data)) {
                        const foundPerson = data.find(person => person.email === email);
                        if (foundPerson) {
                            alert(`Account already existed with ${email}`);
                        } else {
                            var data_to_be_added = { "name": name, "email": email, "password": password, "submissions": [] }
                            Axios.post("https://wordbud-backend.onrender.com/UserRoute/Adduser", data_to_be_added)
                                .then((res) => {
                                    if (res.status === 200) {
                                        alert("Account Created Successfully");
                                        navigate("/");
                                    } else {
                                        alert("OOPS !! Failed to Create Account. Please try again.");
                                    }
                                })
                                .catch((err) => alert(err));
                        }
                    } else {
                        console.log('The data structure is not as expected.');
                    }
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    alert('Failed to fetch data. Please try again.');
                });
        }
    }

    return (
        <div>
            <div>
                <div className="app">
                    <div className="login-form">
                    <div className="title">Create new Account</div>
                    <form onSubmit={handlelogin}>
                        <p>Name</p>
                        <input value={name} onChange={(event) => setname(event.target.value)}></input>
                        <p>Email</p>
                        <input value={email} type="email" onChange={(event) => setemail(event.target.value)}></input>
                        <p>Password</p>
                        <input value={password} onChange={(event) => setPassword(event.target.value)}></input>
                        <br />
                        <br />
                        <Link to="/" className="text-primary text-center" style={{textDecoration:"none",textAlign:"center"}}><span>Login wordbud</span></Link>
                        <div className="text-center">
                            <button className="btn btn-success">Create</button>
                        </div>
                    </form>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default CreateNewUser;
