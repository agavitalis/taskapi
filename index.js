const express = require('express');
const body_parser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
//require api routes which is in the routes folder here
const api_routes = require( './routes/api');


const app = express();

//use morgan, body-parser and cors
app.use(morgan('combined'));
app.use(body_parser.urlencoded({extended:false}))
app.use(body_parser.json());

//Add other URLs you want to be allowed in this array
app.use(cors({credentials:true,origin:['http://localhost:3000','http://localhost:5000']}));

//connect my app to DB
require('./config/db');

//I captured the landing page here
app.get('/', function(req, res, next){
    res.send({status:200,message:"Kindly refer to the README.MD for endpoint details"});
});

//I used the other routes here
app.use(api_routes);

if(app.listen(process.env.PORT||5000)){
    console.log("I am listening to Port 5000")
}