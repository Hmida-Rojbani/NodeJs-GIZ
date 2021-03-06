const router = require('express').Router();
const Joi = require('joi');
let students = [
    {id: 1, name:'student1', class:'class1',age:22, address:'Tunis'},
    {id: 2, name:'student2', class:'class1',age:21, address:'Ariana'},
    {id: 3, name:'student3', class:'class2',age:18, address:'Tunis'},
    {id: 4, name:'student4', class:'class2',age:19, address:'Ariana'}
];
// Define validation schema
let student_validation = Joi.object({
    id: Joi.number().positive(),
    name : Joi.string().min(3).required(),
    class : Joi.string().max(15),
    age : Joi.number().integer().positive(),
    address : Joi.string()

});


// app.get('/api/students',(req,res,next)=>{
//     console.log('Only for GEt');
//     next();
// } ,function (req,res) {
//     res.send(students);
// });
router.get('',function (req,res) {
    res.send(students);
});



// app.use((req,res,next)=>{
//     console.log('Second MidleWare');
//     next();
// })

router.get('/:id', function (req,res) {
    let student = students.find(s=>s.id===parseInt(req.params.id));
    if(!student)
        return res.status(404).send('Student ID not found');
    res.send(student);
})

router.post('', function (req,res) {
    let result_valid= student_validation.validate(req.body);
    if(result_valid.error)
        return res.status(400).send(result_valid.error)
    let student = {
        id : students.length + 1,
        ...req.body
    }
    students.push(student);
    res.send(student);
})

router.put('/:id', function (req,res) {
    let student = students.find(s=>s.id===parseInt(req.params.id));
    if(!student)
        return res.status(404).send('Student ID not found');
    student.name=req.body.name;
    res.send(student);
})

router.delete('/:id', function (req,res) {
    let student = students.find(s=>s.id===parseInt(req.params.id));
    if(!student)
        return res.status(404).send('Student ID not found');
    students=students.filter(s=>s.id!==parseInt(req.params.id));
    res.send(student);
})

module.exports=router