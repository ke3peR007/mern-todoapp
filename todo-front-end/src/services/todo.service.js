import http from "../http-common";

const getAll = () => {
    return http.get("/todoAll");
}
const getItem = data => {
    console.log(data);
    return http.post("/todoItem", data);
}
const createtodo = data => {
    return http.post("/todoAdd", data);
  };

const removetodo = data => {
    return http.post("/todoDel", data);
}

const updatetodo = data => {
    return http.put("/todoUpdate", data);
}
export default {
    getAll,
    getItem,
    createtodo,
    removetodo,
    updatetodo,
    
};