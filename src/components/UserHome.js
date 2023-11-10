import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from 'axios';
import UserHomeSlides from "./UserHomeSlides";
import UserSubmissions from "./UserSubmissions";

function UserHome() {
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState("home");
  const [Name,setname]=useState("");
  const mystyle = {
    height: "100vh",
    backgroundImage: 'url("https://cdn.thecollector.com/wp-content/uploads/2023/09/most-spoken-languages-in-the-world.jpg?width=1400&quality=70")',
    backgroundSize: 'cover',
    overflow: "hidden",
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    Axios.get(`https://language-app-3v1c.onrender.com/UserRoute/updateuser/${id}`)
        .then((res) => {
            if (res.status === 200) {
                const { name} = res.data;
                setname(name);
            } else {
                Promise.reject();
            }
        })
        .catch((err) => alert(err));
}, [id]);

  return (
    <div style={mystyle}>
      <div className="container-lg">
        <div style={{ paddingTop: "0.9vh" }}>
          <h1 className="text-center " style={{ borderRadius: "15px", backgroundColor: "rgba(220,220,220,0.627)", padding: "1vh 0vh",fontFamily:"Gill Sans Extrabold" }}>Language Learning App</h1>
          <p className="btn btn-md h3 " style={{ borderRadius: "15px", backgroundColor: "rgba(220,220,220,0.627)", paddingBottom: "2vh", fontWeight: "bold",marginRight: "2vw", fontFamily:"cursive"}}><i class="bi bi-person-circle"></i>&ensp;Hello {Name}</p>
          <button onClick={() => handlePageChange("home")} className="btn btn-md h3 " style={{marginRight: "2vw", borderRadius: "15px", backgroundColor: "rgba(220,220,220,0.627)", paddingBottom: "2vh", fontWeight: "bold" }}>Home</button>
          <button onClick={() => handlePageChange("submissions")} className="btn btn-md h3 " style={{ borderRadius: "15px", backgroundColor: "rgba(220,220,220,0.627)", paddingBottom: "2vh", fontWeight: "bold" }}>Submissions</button>
          <div style={{ textAlign: "end", marginTop: "-55px" }}>
            <button onClick={() => { window.location = window.location.origin }} className="btn btn-md h3 " style={{ borderRadius: "15px", backgroundColor: "rgba(220,220,220,0.627)", paddingBottom: "2vh", fontWeight: "bold" }}>Log out&ensp; <i class="bi bi-box-arrow-in-left"></i></button>
          </div>
          {currentPage === "home" && <UserHomeSlides />}
          {currentPage === "submissions" && <UserSubmissions userId={id} />}
        </div>
        <div>

        </div>

      </div>
    </div>
  );
}

export default UserHome;
