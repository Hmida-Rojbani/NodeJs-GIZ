const mongoose = require('mongoose');
const mongoDebug = require('debug')('app:mongo');

mongoose.connect('mongodb+srv://user:1234@cluster0.82ynf.mongodb.net/school?retryWrites=true&w=majority')
.then(()=>mongoDebug('MongoDB is UP.'))
.catch(err=>mongoDebug('MongoDB is Down, raison :',err.message))