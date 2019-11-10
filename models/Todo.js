//require mongoose 
var mongoose = require('mongoose')
let schema = mongoose.Schema;

let todo_schema = new schema({
    title: String,
    discription: {
        type: String,
        default: "Your todo description"
    },
    done: Boolean

})

var todos = mongoose.model("todos", todo_schema)
module.exports = todos