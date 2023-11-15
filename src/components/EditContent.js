import AdminCreateBox from "./AdminCreateBox";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

function EditContent() {
    
    const { id } = useParams();
    console.log(id);
    const [initialValue, setInitialValue] = useState({
        name: "",
        image: "",
        content: "",
        quiz: [
            ["", "", "", "", "", ""],
            ["", "", "", "", "", ""],
            ["", "", "", "", "", ""],
            ["", "", "", "", "", ""],
            ["", "", "", "", "", ""],
        ],
    });
    const [newData, setNewData] = useState([]);

    useEffect(() => {
        Axios.get(`https://wordbud-backend.onrender.com/AdminRoute/updatecontent/${id}`)
            .then((res) => {
                if (res.status === 200) {
                    const { name, image, content, quiz } = res.data;
                    setInitialValue({ name, image, content, quiz });
                } else {
                    Promise.reject();
                }
            })
            .catch((err) => alert(err));
    }, [id]);

    const getState = (childData) => {
        setNewData(childData);
    };

    const handleSubmit = () => {
        const data = { name: newData[0], image: newData[1], content: newData[2], quiz: newData[3] };
        Axios.put(`https://wordbud-backend.onrender.com/AdminRoute/updatecontent/${id}`, data)
            .then((res) => {
                if (res.status === 200) {
                    alert("All changes are saved");
                } else {
                    Promise.reject();
                }
            })
            .catch((err) => alert(err));
    };

    return (
        <form onSubmit={handleSubmit}>
            <AdminCreateBox
                getState={getState}
                nameValue={initialValue.name}
                imageValue={initialValue.image}
                contentValue={initialValue.content}
                questionValue={initialValue.quiz}
            >
                Save
            </AdminCreateBox>
        </form>
    );
}

export default EditContent;
