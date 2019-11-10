var Todo = require('../models/Todo')

//create a todo
exports.create_todo = function(req,res,error){
    console.log(req.body.title)
     var new_todo = new Todo({
        title: req.body.title,
        discription: req.body.discription,
        done:req.body.status
     })

     new_todo.save(function(error){
        if(error){
            res.send({
                status:401,
                success:false,
                message:"Todo not created"
            })

        }

        res.send({
            status:200,
            message:"Todo created successfully"
        })
     })
}

//show all the todo in the db
exports.read_todos = function(req,res,error){    
     Todo.find({}).exec()
     .then(function(todo){
        res.send({
            status:200,
            todo: todo
        })
     })
}

//show just one todo based on id
exports.read_todo = function(req,res,error){    
    Todo.find({_id:req.params.id}).exec()
    .then(function(todo){
       res.send({
           status:200,
           todo: todo
       })
    })
}

//update todo based on id
exports.update_todo = function(req,res,error){

    Todo.findById(req.params.id, function(todo){

        todo.title = req.body.title;
        todo.discription = req.body.discription;
        todo.done = req.body.status;
    }).save(function(){
        res.send({
            status:200,
            message: "Todo updated successfully"
        })
    })
  
}

//delete just one todo based on id
exports.delete_todo = function(req,res,error){

    Todo.findOneAndRemove(req.params.id, function(todo){
        res.send({
            status:200,
            message: "Todo deleted successfully"
        }) 
    })
    
}