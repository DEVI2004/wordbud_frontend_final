import { useNavigate } from "react-router-dom";
import AdminHomeSlide from "./AdminHomeSlides";

function AdminHome(){
    const navigate=useNavigate();
    const mystyle = {
        height: "100vh",
        backgroundImage: 'url("https://cdn.thecollector.com/wp-content/uploads/2023/09/most-spoken-languages-in-the-world.jpg?width=1400&quality=70")',
        backgroundSize: 'cover',
        overflow:"hidden"
    };
    
    return(
        <div style={mystyle}>
            <div className="container-lg" >
                <div style={{paddingTop:"0.9vh"}}>
                <h1 className="text-center " style={{borderRadius:"15px",backgroundColor:"rgba(220,220,220,0.627)",padding:"1vh 0vh",}}>wordbud</h1>
                <button onClick={()=>{navigate('/AddContent')}} className="btn btn-md h3 " style={{borderRadius:"15px",backgroundColor:"rgba(220,220,220,0.627)",paddingBottom:"2vh",fontWeight:"bold"}}>Add New Language</button>
                <div style={{ textAlign:"end",marginTop:"-55px"}}>
                <button onClick={()=>{navigate('/')}} className="btn btn-md h3 " style={{borderRadius:"15px",backgroundColor:"rgba(220,220,220,0.627)",paddingBottom:"2vh",fontWeight:"bold"}}>Log out</button>
                </div>
                
                <div>
                    <AdminHomeSlide/>
                </div>
                </div>
                
            </div>
        </div>
    )
}
export default AdminHome;