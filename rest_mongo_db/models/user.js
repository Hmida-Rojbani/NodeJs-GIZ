const mongoose = require('mongoose');

let user_schema = new mongoose.Schema({
    username : {type : String, required : true},
    password : {type : String, required : true},
    name : String,
    email :  {type : String, required : true}
});

let User = mongoose.model('User', user_schema);

module.exports.User = User;