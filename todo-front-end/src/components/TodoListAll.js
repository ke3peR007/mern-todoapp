import React, { useState, useEffect, useDebugValue } from "react";
import Todo from "./Todo";
import TodoDataService from "../services/todo.service";
import { link } from "react-router-dom";
import axios from "axios";
// import todo from "../../../todo-backend/src/models/todo";

function TodoListALL() {

    const [todos, setTodos] = useState([]);
    const [item, setItem] = useState("");
    const [_id, setId] = useState("");
    const [isStatus, setIsStatus] = useState(false);
    const [editValue, setEditValue] = useState("");
    useEffect(() => {
        getTodos();
    }, []);


    const  getTodos = () => {
         TodoDataService.getAll()
            .then(response => {
                // 
                setTodos(response.data)
                console.log(response.data)
                
            })
            .catch(e => {
                console.log(e);
            });
    };
    const submitTodo = (e) => {
        e.preventDefault();
        const todoData = {item, isStatus}
        console.log(todoData);
        TodoDataService.createtodo(todoData)
        .then(res => {
            console.log("item created");
            getTodos();
        })
        .catch(err => {
            console.log(err.response);
        });
        
        
    };
    const editItem = async i => {
        console.log(i);
        const item_id = { item: i}
        
        console.log(item_id);
        TodoDataService.getItem(item_id)
        .then(res => {
            setItem(editValue);
            console.log(item);
            console.log(res.data)
            const id = res.data._id;
            const editTodo = {_id : id, item : editValue};
            console.log(editTodo);
            TodoDataService.updatetodo(editTodo)
            .then(res => {
                console.log("item edidted");
                getTodos();
            })
            .catch(err => {
                console.log(err.response);
            });  
            
        })
        .catch(err => {
            console.log(err.response);
        })
    }
    const itemDel = (e) => {
        console.log("we are here");
            
            const id = {objId: _id}
            
            TodoDataService.removetodo(id)
            .then(res => {
                console.log("item delete");
                // getTodos();
            })
            .catch(err => {
                console.log(err.response);
            });
        };

        const deleteData = async id => {
            const deleteData = { _id: id}
            console.log(id);
            console.log(deleteData);
            TodoDataService.removetodo(deleteData)
            .then(res => {
                console.log("item delete");
                getTodos();
            })
            .catch(err => {
                console.log(err.response);
            });
            
        }
    // async function getTodos() {
    //     await axios.get("http://localhost:8000/api/todoAll")
    //     .then(res => setTodos(res.data))
    //     .catch(err => console.log(err));
    // }
    // const tds = JSON.stringify(todos, null,1);

    // const {message, itemdata} = todos
    // console.log(itemdata);
    // const refreshList = () => {
    //     getTodos();
    // }
    // console.log(todos.data);
    function todoListData() {
        if (todos) {
            return todos.map(a => {
                return (

                    <tr key={a._id}>
                    <td>{a.item}
                    <span><input onChange={(event) => setEditValue(event.target.value)}></input><button><a onClick={() => editItem(a.item)}>Edit</a></button></span>
                    <span><button><a onClick={() => deleteData(a._id)}>Delete</a></button></span>
                    
                    </td>
                    
                    
                </tr>
                    
                    )
            })
        }
    };

    return (
        <div>
            <h1>Welcome To Do list.</h1>
            
            <form onSubmit={submitTodo}>
                <input placeholder="todo" onChange={(event)=> setItem(event.target.value)} ></input>
                <button type="submit">Add</button>
            </form>
            <br></br>
            <table className="main__table" 
             style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
              >
                <thead>
                    <tr>
                        <th></th>

                    </tr>
                </thead>
                <tbody>
                    {todoListData()}  
                </tbody>
            </table>
        </div>
    );
}

export default TodoListALL;