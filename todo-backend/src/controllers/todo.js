const Todo = require("../models/todo");

exports.create = (req, res) => {
    
    
      // Create a Todo
      const todo = new Todo({
        item: req.body.item,
        
        status: req.body.status ? req.body.status : false
      });
    
      // Save Todo in the database
      todo.save((err, data) => {
            if(err) {
                return res.status(400).json({
                    message: "something went wrong"
                });
            }
            if(data) {
                return res.status(201).json({
                    message: "item created successfully."
                });
            }
        });
        
};


exports.deleteItem = (req, res) => {
    
    Todo.findByIdAndDelete(req.body._id, function(err) {
        if(err) {
            console.log(err);
        } else {
            res.status(200).json({
                message: "item deleted."
            });
        }
    }); 

};

exports.showAll = (req, res) => {
    Todo.find({}, function(err, todoData) {
        if(!err) {
            res.json(todoData);
            
        } else {
            res.status(400).json({
                message: err
            })
        }
    });
};



exports.updateItem = (req, res) => {
    console.log(req.body.item);
    Todo.findByIdAndUpdate(req.body._id, {item: req.body.item}, function(err, itemUpdated) {
        if(err) {
            res.status(400).json({
                message: err
            });
        } else {
            res.status(200).json({
                message: "item updated."
            });
        }
    });
};


exports.getItem = (req, res) => {
    // console.log(req.body.item);
    Todo.findOne({item: req.body.item}, function(err, itemFound) {
        if(!err) {
            console.log(itemFound)
            res.json(itemFound);
        } else {
            res.status(400).json({
                message: err
            });
        }
    });
};