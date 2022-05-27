const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const adress_schema = new mongoose.Schema({
        number : Number,
        street : String,
        city : String
});

const student_schema = new mongoose.Schema({
    name : {
        type : String,
        unique : true,
        required : true
    },
    age : Number,
    class : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'ClassRoom'
    },
    adress : adress_schema
});

let student_validator = Joi.object({
    name : Joi.string().required(),
    age : Joi.number().positive(),
    class : Joi.objectId().required(),
    adress : {
        number : Joi.number().integer().positive(),
        street : Joi.string().min(5),
        city : Joi.string()
    }
});


let Student = mongoose.model('Student',student_schema);

module.exports.Student = Student;
module.exports.student_validator = student_validator;

// module.exports  = {
//     Student : Student,
//     student_validator : student_validator
// }