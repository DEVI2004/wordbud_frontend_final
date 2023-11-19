import { useNavigate } from "react-router-dom";
import AdminHomeSlide from "./AdminHomeSlides";


function AdminHome(){
    const navigate=useNavigate();
    const mystyle = {
        height: "100vh",
        backgroundImage: 'url("https://i0.wp.com/millennialcities.com/wp-content/uploads/2023/01/Language.png?fit=1024%2C768&ssl=1")',
        
        backgroundSize: 'cover',
        overflow:"hidden"
    };
    
    // return(
    //     <div style={mystyle}>
    //         <div className="container-lg" >
    //             <div style={{paddingTop:"0.9vh"}}>
    //             <h1 className="text-center " style={{borderRadius:"15px",backgroundColor:"rgba(65,180,15)",padding:"0.5vh 0vh",}}>wordbud</h1>
    //             <button onClick={()=>{navigate('/AddContent')}} className="btn btn-md h3 " style={{borderRadius:"15px",backgroundColor:"rgba(65,180,15)",paddingBottom:"2vh",fontWeight:"bold"}}>Add New Language</button>
    //             <div style={{ textAlign:"end",marginTop:"-60px"}}>
    //             <button onClick={()=>{navigate('/')}} className="btn btn-md h3 " style={{borderRadius:"15px",backgroundColor:"rgba(65,180,15)",paddingBottom:"2vh",fontWeight:"bold"}}>Log out</button>
    //             </div>
                
    //             <div>
    //                 <AdminHomeSlide/>
    //             </div>
    //             </div>
                
    //         </div>
    //     </div>
    // )

    return(
        <div>
            <div style={{ backgroundColor: "black", color: "green", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <button onClick={() => { navigate('/AddContent') }} className="btn btn-md h3" style={{ fontWeight: "bold" }}>Add New Language</button>
    
                <h1 className="text-center" style={{ backgroundColor: "black", padding: "1vh 0vh", margin: "0" }}>WordBud</h1>
    
                <button onClick={() => { navigate('/') }} className="btn btn-md h3" style={{ fontWeight: "bold" }}>Log out</button>
            </div>
        <div>
            <AdminHomeSlide/>
        </div>
        </div>

    )

}
export default AdminHome;