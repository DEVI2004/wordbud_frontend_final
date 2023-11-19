import {Link} from "react-router-dom";
import './loginstyle.css'; 

function Wordbudnavbar(){
    return(
        <div>
            <div>
      <div style={{ backgroundColor: "black", padding: "10px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ width: "100%", display: "flex", justifyContent: "left"}}>
        <div style={{ display: "flex", alignItems: "center"}}>
            <p className="btn btn-md h3" style={{ marginTop: "2vh", marginLeft: "2vh", color: "green", paddingBottom: "2vh", fontWeight: "bold", marginRight: "2vw", fontFamily: "cursive" }}>
              <i className="bi bi-person-circle"></i>
            </p>
          </div>
          <h1 style={{fontFamily: 'Trebuchet MS', backgroundColor: "black", color: "green", padding: "1vh 0vh", fontFamily: "Gill Sans Extrabold", textAlign: "center", flex: "1" , fontWeight: "bold" ,marginRight: "60px"}}>WordBud</h1>
          <div style={{ marginleft: "700px", justifyContent: "center"}}>
            <button onClick={() => { window.location = window.location.origin }} className="btn btn-md h3" style={{ backgroundColor: "transparent", color: "green", paddingTop: "2vh", fontWeight: "bold" }}>
              <i className="bi bi-box-arrow-in-right"></i>
            </button>
          </div>
        </div>
            
           {/* <nav class="navbar bg-success">
            <Link to="/" class="navbar-brand">wordbud</Link>
            <Link to="/" class="nav-link">Home</Link>
            <Link to="/" class="nav-link">Learn More</Link>
        </nav> */}
        </div>
        </div>
        </div>
    )
}
export default Wordbudnavbar;

// import { Link } from "react-router-dom";

// function Wordbudnavbar() {
//   return (
//     <div className="container">
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <a className="navbar-brand" href="/">wordbud</a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item">
//               <Link className="nav-link" to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/">
//                 Learn More
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Wordbudnavbar;
