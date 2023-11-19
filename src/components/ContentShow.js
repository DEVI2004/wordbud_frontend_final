// import React, { useEffect, useState } from 'react';
// import {   useNavigate, useParams } from 'react-router-dom';
// import Axios from 'axios';
// import Content from './Content';
// import Quiz from './Quiz';
// function ContentShow() {
//     const navigate=useNavigate();
//     const {id1,id2}=useParams();
//     const [content,setcontent]=useState();
    
//     useEffect(() => {
//         const fetchData = async () => {
//           try {
//             const response = await Axios.get(`http://localhost:4000/AdminRoute/updatecontent/${id2}`);
//             if (response.status === 200) {
//               setcontent(response.data);
//             } else {
//               throw new Error('Failed to fetch content.');
//             }
//           } catch (error) {
            
//             console.error(error);
//           }
//         };
    
//         fetchData();
//       }, [id2]);
    
//     if (!content) {
//         return <div>Loading</div>;
//     }
//     const mystyle = {
//         height: "100vh",
//         backgroundImage: `url(${content.image})`,
//         backgroundSize: 'cover',
//         // overflow:"hidden"
//     };
    
//     return (
//         <div>
//             <div style={mystyle}>
//                 <div className="container-lg" >
//                     <div style={{paddingTop:"0.9vh"}}>
//                         <h1 className="text-center " style={{borderRadius:"15px",backgroundColor:"rgba(220,220,220,0.627)",padding:"1vh 0vh",}}>{content.name}</h1>
//                         <button onClick={()=>{}} className="btn btn-md h3 " style={{borderRadius:"15px",backgroundColor:"rgba(220,220,220,0.627)",paddingBottom:"2vh",fontWeight:"bold"}}>Content</button>
//                         <button onClick={()=>{}} className="btn btn-md h3 " style={{borderRadius:"15px",backgroundColor:"rgba(220,220,220,0.627)",paddingBottom:"2vh",fontWeight:"bold"}}>Take a Quiz</button>
//                         <div style={{ textAlign:"end",marginTop:"-55px"}}>
//                             <button onClick={()=>{navigate("/UserHome/"+id1)}} className="btn btn-md h3 " style={{borderRadius:"15px",backgroundColor:"rgba(220,220,220,0.627)",paddingBottom:"2vh",fontWeight:"bold"}}>Back to Home</button>
//                         </div>
//                     </div>
//                 </div>
//             <Content content={content.content} />
//             <Quiz quizData={content.quiz} />
//         </div>
            
//         </div>
//     );
// }

// export default ContentShow;


// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import Axios from 'axios';
// import Content from './Content';
// import Quiz from './Quiz';

// function ContentShow() {
//   const navigate = useNavigate();
//   const { id1, id2 } = useParams();
//   const [content, setcontent] = useState();
//   const [view, setView] = useState('content'); // 'content' or 'quiz'

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await Axios.get(`https://wordbud-backend.onrender.com/AdminRoute/updatecontent/${id2}`);
//         if (response.status === 200) {
//           setcontent(response.data);
//         } else {
//           throw new Error('Failed to fetch content.');
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, [id2]);

//   if (!content) {
//     return <div>Loading</div>;
//   }

//   const mystyle = {
//     height: "100vh",
//     backgroundImage: `url(${content.image})`,
//     backgroundSize: 'cover',
//     overflow:"hidden"
//   };

//   const handleContentClick = () => {
//     setView('content');
//   };

//   const handleQuizClick = () => {
//     setView('quiz');
//   };

//   return (
//     <div>
//       <div style={mystyle}>
//         <div className="container-lg">
//           <div style={{ paddingTop: "0.9vh" }}>
//             <h1 className="text-center " style={{ borderRadius: "15px", backgroundColor: "rgba(220,220,220,0.627)", padding: "1vh 0vh" }}>{content.name}</h1>
//             <button onClick={handleContentClick} className="btn btn-md h3" style={{ borderRadius: "15px", backgroundColor: "rgba(220,220,220,0.627)", paddingBottom: "2vh", fontWeight: "bold",marginRight:"2vw" }}>Content</button>
//             <button onClick={handleQuizClick} className="btn btn-md h3 " style={{ borderRadius: "15px", backgroundColor: "rgba(220,220,220,0.627)", paddingBottom: "2vh", fontWeight: "bold" }}>Take a Quiz</button>
//             <div style={{ textAlign: "end", marginTop: "-55px" }}>
//               <button onClick={() => { navigate("/UserHome/" + id1) }} className="btn btn-md h3" style={{ borderRadius: "15px", backgroundColor: "rgba(220,220,220,0.627)", paddingBottom: "2vh", fontWeight: "bold" }}>Back to Home</button>
//             </div>
//           </div>
//         </div>
//         {view === 'content' && <Content content={content.content} />}
//         {view === 'quiz' && <Quiz quizData={content.quiz} id={id1} languagename={content.name} />}
//       </div>
//     </div>
//   );
// }

// export default ContentShow;


import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Axios from 'axios';
import Content from './Content';
import Quiz from './Quiz';

function ContentShow() {
  const navigate = useNavigate();
  const { id1, id2 } = useParams();
  const [content, setcontent] = useState();
  const [view, setView] = useState('content'); // 'content' or 'quiz'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(`https://wordbud-backend.onrender.com/AdminRoute/updatecontent/${id2}`);
        if (response.status === 200) {
          setcontent(response.data);
        } else {
          throw new Error('Failed to fetch content.');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id2]);

  if (!content) {
    return <div>Loading</div>;
  }

  const mystyle = {
    height: "100vh",
    backgroundImage: `url(${content.image})`,
    backgroundSize: 'cover',
    overflow:"hidden"
  };

  const handleContentClick = () => {
    setView('content');
  };

  const handleQuizClick = () => {
    setView('quiz');
  };

  return (
    <div style={{ backgroundColor: "black", width: "100%" }}>
      <div style={mystyle}>
        <div className="container-lg">
          <div style={{ marginTop:"10px", display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "rgba(220,220,220,0.627)", color: "green", borderRadius:"10px"}}>
            <h1 style={{ marginBottom: "1vh", fontWeight:"bold" }}>{content.name}</h1>
            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
              <button onClick={handleContentClick} className="btn btn-md h3" style={{ marginLeft: "10px", backgroundColor: "green", color: "black", marginRight: "2vw", fontWeight: "bold" }}>Content</button>
              <button onClick={handleQuizClick} className="btn btn-md h3" style={{ backgroundColor: "green", color: "black", marginRight: "2vw", fontWeight: "bold" }}>Take a Quiz</button>
              <div style={{ flex: "1" }}></div>
              <button onClick={() => { navigate("/UserHome/" + id1) }} className="btn btn-md h3" style={{ marginRight: "10px", backgroundColor: "green", fontWeight: "bold", color: "black" }}>Back to Home</button>
            </div>
          </div>
        </div>
        {view === 'content' && <Content content={content.content} />}
        {view === 'quiz' && <Quiz quizData={content.quiz} id={id1} languagename={content.name} />}
      </div>
    </div>
  );
  
  
  
  
}

export default ContentShow;

