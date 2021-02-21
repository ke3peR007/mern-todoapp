import React, {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TodoDataService from "../services/todo.service";


function TodoEdit() {

    const [item, setItem] = useState("loading ..");
    const {id} = useParams();
    const [itemid, setItemId] = useState("");
    console.log(id);
    

    const getItemf = (id) => {
        console.log(id);
    }

    useEffect(() => {
        console.log(id);
        const item_id = { _id: id}
        
        console.log(item_id);
        TodoDataService.getItem(item_id)
        .then(res => {
            console.log(res.data)
            
        })
        .catch(err => {
            console.log(err.response);
        })
    })
    

    return (
        <form>
            {itemid}
            <input value={item} onLoad={()=>getItemf(id)}></input>
            <button>Update</button>
        </form>
    )
};


export default TodoEdit;