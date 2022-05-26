const router = require('express').Router();
const {Student} = require('../models/student');
const {ClassRoom} = require('../models/class_room');
const studentDebug = require('debug')('app:route:student');

//save student
router.post('/', async (req,res)=>{
    //check if class exist
    let classId = req.body.class;
    let classRoom = await ClassRoom.findById(classId);
    
    if(!classRoom)
        return res.status(400).send('Class Id not Found');
    let student = new Student(req.body);
    
    try {
        student = await student.save();
        studentDebug('student saved');
        classRoom.students.push(student._id);
        classRoom.nb_students = classRoom.nb_students +1;
        
        await classRoom.save();
        studentDebug('classRoom updated');
        return res.send(student)
    } catch (error) {
        res.send(405).send(error.message);
    }
});

//retreive all students
router.get('/', async (req,res)=>{
    let students = await Student.find()
                        .populate('class','name active')
    res.send(students)

})
//find by Id
router.get('/:id', async (req,res)=>{
    let student = await Student.findById(req.params.id);
    if(!student)
        return res.status(404).send('Student not found')
    res.send(student)

});

//find by age
router.get('/age/:age', async (req,res)=>{
    let students = await Student.find({age:{$eq : req.params.age}});
    if(students.length==0)
        return res.status(204).send();
    res.send(students)

});

//find by age under given
//operation
// $eq equal
//$neq not equal
// $lt less then
// $lte less then and equal
// $gt greater then
// $gte greater then and equal
// $in || $nin
router.get('/age/under/:age', async (req,res)=>{
    let students = await Student.find({age:{$lte : req.params.age}},'name class -_id');
    if(students.length==0)
        return res.status(204).send();
    res.send(students)

});

//test limit
router.get('/age/under/:age/limit/:limit', async (req,res)=>{
    let students = await Student.find({age:{$lte : req.params.age}},'name -_id')
                                .limit(req.params.limit)
    if(students.length==0)
        return res.status(204).send();
    res.send(students)

});

//test pagination
router.get('/age/over/:age/size/:size/page/:page', async (req,res)=>{
    let students = await Student.find({age:{$gte : req.params.age}},'name -_id')
                                .skip((req.params.page-1)*req.params.size)
                                .limit(req.params.size)
    if(students.length==0)
        return res.status(204).send();
    res.send(students)

});
//two criteria (and)
router.get('/and/name/:name/class/:class', async (req,res)=>{
   // let students = await Student.find({name:req.params.name,class: req.params.class})
   let students = await Student.find({name:req.params.name})
                                .and({class: req.params.class})
    if(students.length==0)
        return res.status(204).send();
    res.send(students)

});

//two criteria (or)
router.get('/or/name/:name/class/:class', async (req,res)=>{
    // let students = await Student.find({name:req.params.name,class: req.params.class})
    let students = await Student.find({$or : [{name:req.params.name},{class: req.params.class}]})
    if(students.length==0)
        return res.status(204).send();
    res.send(students)
});

 //two criteria (return second if first criteria is missing)
router.get('/name/:name/class/:class', async (req,res)=>{
    // let students = await Student.find({name:req.params.name,class: req.params.class})
    let students = await Student.find()
                                .or({name:req.params.name},{class: req.params.class})
    if(students.length==0)
        return res.status(204).send();
    res.send(students)

});
module.exports=router