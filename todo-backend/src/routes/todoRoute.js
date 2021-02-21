const express = require("express");
const {create, deleteItem, showAll, updateItem, getItem} = require("../controllers/todo");
const router = express.Router();

router.post("/todoAdd", create);
router.post("/todoDel", deleteItem);
router.get("/todoAll", showAll);
router.put("/todoUpdate", updateItem);
router.post("/todoItem", getItem);
module.exports= router;