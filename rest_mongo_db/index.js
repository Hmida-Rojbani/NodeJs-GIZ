require('./db/connect')
const express = require('express');
const appDebug = require('debug')('app:debug')
const student_router= require('./routers/students')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/students',student_router);


app.listen(port, ()=> appDebug(`Server run on ${port}`))