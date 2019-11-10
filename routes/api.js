//since I will be routing from here, I will have to import express and use the express router function
const express = require('express');
const router = express.Router();
var Todocontroller = require('../controllers/TodoController')

//setup my routes, to use each controller function
router.use('/api/create_todo', Todocontroller.create_todo)
router.use('/api/read_todos', Todocontroller.read_todos)
router.use('/api/read_todo/:id', Todocontroller.read_todo)
router.use('/api/update_todo/:id', Todocontroller.update_todo)
router.use('/api/delete_todo/:id', Todocontroller.delete_todo)


//dont forget to export your routes
module.exports = router;