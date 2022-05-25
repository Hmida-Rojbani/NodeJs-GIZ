const router = require('express').Router();
const {Student} = require('../models/student');

//save student
router.post('/', async (req,res)=>{

    let student = new Student(req.body);
    try {
        student = await student.save();
        res.send(student)
    } catch (error) {
        res.send(405).send(error.message);
    }
});

//retreive all students
router.get('/', async (req,res)=>{
    let students = await Student.find();
    res.send(students)

})
//find by Id
router.get('/:id', async (req,res)=>{
    let student = await Student.findById(req.params.id);
    if(!student)
        return res.status(404).send('Student not found');
    res.send(student)

})

module.exports=router