const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user:1234@cluster0.l9vwd.mongodb.net/?retryWrites=true&w=majority')
.then(()=>console.log('MongoDB is UP.'))
.catch(err=>console.log('MongoDB is Down, raison :',err.message))