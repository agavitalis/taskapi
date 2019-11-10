var mongoose = require('mongoose')

//connect to a local mongo DB
//mongoose.connect("mongodb://localhost:27017/taskapi-v", {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

//before going live, uncomment this connection
mongoose.connect('mongodb://vitalis:vitalis123@ds263307.mlab.com:63307/taskapi-v', {
    useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true
});

//check if the connection was successful
mongoose.connection.on('error', console.error.bind(console, 'connection error'))

//notifiy me if it was successful
mongoose.connection.once('open', function () {
    console.log('Database connection was successful')
})
