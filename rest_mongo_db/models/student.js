const mongoose = require('mongoose');

const student_schema = new mongoose.Schema({
    name : String,
    age : Number,
    class : String
});

let Student = mongoose.model('Student',student_schema);

module.exports.Student = Student;