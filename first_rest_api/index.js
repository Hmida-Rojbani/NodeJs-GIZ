const express = require('express');
const Joi = require('joi');
const app=express();

app.use(express.json())

let students = [
    {id: 1, name:'student1', class:'class1',age:22},
    {id: 2, name:'student2', class:'class1',age:21},
    {id: 3, name:'student3', class:'class2',age:22}
];
// Define validation schema
let student_validation = Joi.object({
    id: Joi.number().positive(),
    name : Joi.string().min(3).required(),
    class : Joi.string().max(15),
    age : Joi.number().integer().positive(),


});


app.get('/api/students', function (req,res) {
    res.send(students);
});

app.get('/api/students/:id', function (req,res) {
    let student = students.find(s=>s.id===parseInt(req.params.id));
    if(!student)
        return res.status(404).send('Student ID not found');
    res.send(student);
})

app.post('/api/students', function (req,res) {
    let result_valid= student_validation.validate(req.body);
    if(result_valid.error)
        return res.status(400).send(result_valid.error)
    let student = {
        id : students.length + 1,
        name : req.body.name,
        class : req.body.class
    }
    students.push(student);
    res.send(student);
})

app.put('/api/students/:id', function (req,res) {
    let student = students.find(s=>s.id===parseInt(req.params.id));
    if(!student)
        return res.status(404).send('Student ID not found');
    student.name=req.body.name;
    res.send(student);
})

app.delete('/api/students/:id', function (req,res) {
    let student = students.find(s=>s.id===parseInt(req.params.id));
    if(!student)
        return res.status(404).send('Student ID not found');
    students=students.filter(s=>s.id!==parseInt(req.params.id));
    res.send(student);
})


app.listen(3000,function () {
    console.log('Server running on 3000');
})