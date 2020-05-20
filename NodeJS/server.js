//////////////
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

//Setup connect mongodb by mongoose
mongoose.connect('mongodb://localhost/nodejs', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>console.log("Connected database from mongodb."))
    .catch((error)=>console.log(`Connect database is failed with error which is ${error}`));

const app =express();

//Middlewares
app.use(logger('dev'));

//User route
const usersRoute = require('./routes/User.js');
app.use('', usersRoute);

//Routes
app.get('/', (req, res, next)=>{
    return res.status(200).json({
        message: 'Server is OK!'
    })
})

//Catch 404 errors and forward them to error handler
app.use((req, res, next)=>{
    const err = new Error('Not found!');
    err.status=404;
    next(err);
})

//Error handler function
app.use(()=>{
    const error = app.get("env")==='development' ? err : {}
    const status = err.status || 500;

    //response to client
    return res.status(status).json({
        error: {
            message: error.message
        }
    })
})

const port = app.get('port')||3000;
app.listen(port, ()=>console.log('Server is running!'));