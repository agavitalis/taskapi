<p align="center">TASK API</p>

## About Task-API
Task api is a simple task management system to help manage your todos

Preview the desktop demo at :https://taskapi-v.herokuapp.com

- [Simple, fast and slick](https://taskapi-v.herokuapp.com).
- [Effiecient and  Transparent](https://taskapi-v.herokuapp.com).

## How to use this app
To use this application, simple consume the following endpoints:

- [Create a Task] (https://taskapi-v.herokuapp.com/api/create_todo)
Send a post request to the above endpoint with the following parameters:
--- title : a string
--- description : a string
--- status: a boolean

- [View Tasks] (https://taskapi-v.herokuapp.com/api/read_todos)
Send a get request to the above endpoint to get a list of all the todos

- [View a Task] (https://taskapi-v.herokuapp.com/api/read_todo/{id})
Send a get request to the above endpoint, where "id" is the id of the task to get

- [Edit a Task] (https://taskapi-v.herokuapp.com/api/update_todo/{id})
Send a post request to the above endpoint with the following parameters:
--- title : a string
--- description : a string
--- status: a boolean
Where "id" is the id of the task to update

- [Delete a Task] (https://taskapi-v.herokuapp.com/api/delete_todo/{id})
Send a get request to the above endpoint, where "id" is the id of the task to delete

## Security Vulnerabilities
If you discover a security vulnerability within TaskAPI, please send an e-mail to Vitalis via [support@taskapi](mailto:agavitalisogbonna@gmail.com). All security vulnerabilities will be promptly addressed.

## License
The Project  is licensed under the [MIT license](https://opensource.org/licenses/MIT).
