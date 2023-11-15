import Axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './style.css'
function AdminHomeSlide() {
    const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get("https://wordbud-backend.onrender.com/AdminRoute/")
            .then((res) => {
                if (res.status === 200) setData(res.data);
                else Promise.reject();
            })
            .catch((err) => alert(err));
    }, []);


    const handleClick = (_id) => {
        const shouldDelete = window.confirm("Are you sure you want to delete this course?");
        if (shouldDelete) {
            Axios.delete(`https://wordbud-backend.onrender.com/AdminRoute/delete-content/${_id}`)
                .then((res) => {
                    if (res.status === 200) {
                        alert("Record deleted successfully");
                        window.location.reload();
                    } else {
                        Promise.reject();
                    }
                })
                .catch((err) => alert(err));
        }
    };
    
    return (
        <div className="my-2 ">
            <div >
                <div className="row example gx-3 " style={{borderRadius:"25px",backgroundColor:"rgba(220,220,220,0.627)", height: "80vh", overflowY: "scroll" }}>
                    {data.map((val) => (
                        <div className="col-md-6 col-lg-6 col-xl-4" key={val._id} style={{ marginBottom: "20px" }}>
                            <div className="card mt-5" style={{borderRadius:"25px",backgroundColor:"rgba(220,220,220,0.627)", maxHeight: "90vh", overflow: "hidden" }}>
                                <div className="row justify-content-center">
                                    <img src={val.image} className="mt-3 card-img-top" alt="Loading" style={{height:"300px"}} />
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title">Language Name: {val.name}</h5>
                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <Link to={`/Editcontent/${val._id}`} className="btn btn-success">
                                        Edit Course
                                    </Link>
                                    <button onClick={() => handleClick(val._id)} className="btn btn-danger">
                                        Delete Course
                                    </button>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AdminHomeSlide;
