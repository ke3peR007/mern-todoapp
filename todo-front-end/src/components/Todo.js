import React, { useState } from "react";
import TodoDataService from "../services/todo.service";
function Todo(props) {
    // const [_id, setId] = useState("");
    
    // setId(props.key);

    


    // const itemDel = (e) => {
    //     e.preventDefault();
    //     const id = {_id}
    //     TodoDataService.remove(id)
    //     .then(res => {
    //         console.log("item delete");
    //         // getTodos();
    //     })
    //     .catch(err => {
    //         console.log(err.response);
    //     });
    // };
    return (
        <div>
            <h1>{props.item}</h1>
            <form >
                <input type="hidden" value={props.id} ></input>
            <button type="submit">Del</button>
            </form>
            
        </div>
    );
}

export default Todo;