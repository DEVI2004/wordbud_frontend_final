import AdminCreateBox from "./AdminCreateBox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
function AdminCreate(){
  const navigate=useNavigate();
    const [arr, setArr] = useState([]);

  const getState = (ChildData) => {
    setArr(ChildData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var data_to_be_added = {
      name: arr[0],
      image: arr[1],
      content: arr[2],
      quiz: arr[3],
    };
    
    console.log(data_to_be_added)
    Axios.post("https://wordbud-backend.onrender.com/AdminRoute/Addcontent", data_to_be_added)
      .then((res) => {
        if (res.status === 200) {
          alert("Record added successfully");
          navigate('/AdminHome');
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
}
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <AdminCreateBox
                    getState={getState}
                    nameValue=""
                    imageValue="https://cdn.thecollector.com/wp-content/uploads/2023/09/most-spoken-languages-in-the-world.jpg?width=1400&quality=70"
                    ContentValue=""
                    questionValue={[
                        ["","","","","",""],
                        ["","","","","",""],
                        ["","","","","",""],
                        ["","","","","",""],
                        ["","","","","",""],
                    ]}
                > Add the Content
                </AdminCreateBox>
            </form>
        </div>
    )
}
export default AdminCreate;