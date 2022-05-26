const mongoose = require('mongoose');

const adress_schema = new mongoose.Schema({
        number : Number,
        street : String,
        city : String
});

const student_schema = new mongoose.Schema({
    name : String,
    age : Number,
    class : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'ClassRoom'
    },
    adress : adress_schema
});

let Student = mongoose.model('Student',student_schema);

module.exports.Student = Student;