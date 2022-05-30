require('./db/connect')
const express = require('express');
const appDebug = require('debug')('app:debug')
const student_router= require('./routers/students'); 
const class_room_router= require('./routers/class_rooms'); 
const teacher_router= require('./routers/teachers'); 
const user_router= require('./routers/users'); 
const auth = require('./middelwares/auth')
var cors = require('cors')



const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use('/api/students',student_router);
app.use('/api/classrooms',class_room_router);
app.use('/api/teachers',auth,teacher_router);
app.use('/api/users',user_router);


app.listen(port, ()=> appDebug(`Server run on ${port}`))