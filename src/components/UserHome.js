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
    backgroundImage: 'url("https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/12/03195139/how-to-learn-new-languages-01.jpg")',
    backgroundSize: 'cover',
    overflow: "hidden",
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    Axios.get(`https://wordbud-backend.onrender.com/UserRoute/updateuser/${id}`)
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

  // return (
  //   <div style={mystyle}>
  //     <div className="container-lg">
  //       <div style={{ paddingTop: "0.9vh" }}>
  //         <h1 className="text-center " style={{ borderRadius: "15px", backgroundColor: "rgba(220,220,220,0.627)", padding: "1vh 0vh",fontFamily:"Gill Sans Extrabold" }}>wordbud</h1>
  //         <p className="btn btn-md h3 " style={{ borderRadius: "15px", backgroundColor: "rgba(220,220,220,0.627)", paddingBottom: "2vh", fontWeight: "bold",marginRight: "2vw", fontFamily:"cursive"}}><i class="bi bi-person-circle"></i> {Name}</p>
  //         <button onClick={() => handlePageChange("home")} className="btn btn-md h3 " style={{marginRight: "2vw", borderRadius: "15px", backgroundColor: "rgba(220,220,220,0.627)", paddingBottom: "2vh", fontWeight: "bold" }}>Home</button>
  //         <button onClick={() => handlePageChange("submissions")} className="btn btn-md h3 " style={{ borderRadius: "15px", backgroundColor: "rgba(220,220,220,0.627)", paddingBottom: "2vh", fontWeight: "bold" }}>Submissions</button>
  //         <div style={{ textAlign: "end", marginTop: "-55px" }}>
  //           <button onClick={() => { window.location = window.location.origin }} className="btn btn-md h3 " style={{ borderRadius: "15px", backgroundColor: "rgba(220,220,220,0.627)", paddingBottom: "2vh", fontWeight: "bold" }}> <i class="bi bi-box-arrow-in-left"></i></button>
  //         </div>
  //         {currentPage === "home" && <UserHomeSlides />}
  //         {currentPage === "submissions" && <UserSubmissions userId={id} />}
  //       </div>
  //       <div>

  //       </div>

  //     </div>
  //   </div>
  // );

  return (
    <div>
      <div style={{ backgroundColor: "black", padding: "10px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ width: "100%", display: "flex", justifyContent: "left"}}>
        <div style={{ display: "flex", alignItems: "center"}}>
            <p className="btn btn-md h3" style={{ marginTop: "2vh", marginLeft: "2vh", color: "green", paddingBottom: "2vh", fontWeight: "bold", marginRight: "2vw", fontFamily: "cursive" }}>
              <i className="bi bi-person-circle"></i> {Name}
            </p>
            <button onClick={() => handlePageChange("home")} className="btn btn-md h3" style={{ marginTop: "2vh", color: "green", paddingBottom: "2vh", fontWeight: "bold", marginRight: "2vw" }}>
              Home
            </button>
            <button onClick={() => handlePageChange("submissions")} className="btn btn-md h3" style={{ marginTop: "2vh", color: "green", paddingBottom: "2vh", fontWeight: "bold" }}>
              Submissions
            </button>
          </div>
          <h1 style={{fontFamily: 'Trebuchet MS', backgroundColor: "black", color: "green", padding: "1vh 0vh", fontFamily: "Gill Sans Extrabold", textAlign: "center", flex: "1" , fontWeight: "bold" ,marginRight: "300px"}}>WordBud</h1>
          <div style={{ marginLeft: "auto", justifyContent: "center"}}>
            <button onClick={() => { window.location = window.location.origin }} className="btn btn-md h3" style={{ backgroundColor: "transparent", color: "green", paddingTop: "2vh", fontWeight: "bold" }}>
              <i className="bi bi-box-arrow-in-left"></i>
            </button>
          </div>
        </div>
      </div>
      {/* <div>
        <VideoPlayer />
      </div> */}
      {currentPage === "home" && <UserHomeSlides />}
      {currentPage === "submissions" && <UserSubmissions userId={id} />}
    </div>
  );
}

export default UserHome;
