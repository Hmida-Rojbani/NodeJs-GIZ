const router = require('express').Router();
const {Teacher} = require('../models/teacher');
const {ClassRoom} = require('../models/class_room');

router.post('/',async (req,res)=>{
    
    let teacher = new Teacher(req.body);
    
    try {
        teacher = await teacher.save();
        return res.send(teacher)
    } catch (error) {
        res.send(405).send(error.message);
    }
});

router.put('/:id_teacher/add/class/:id_class',async (req,res)=>{
    
    let teacher = await Teacher.findById(req.params.id_teacher);
    if(!teacher)
        return res.status(404).send('Teacher not found');

    let classRoom = await ClassRoom.findById(req.params.id_class);
        if(!classRoom)
            return res.status(404).send('ClassRoom not found');
    try {
        //update of teacher
        let classObjRelation = {
            _id : classRoom._id,
            name : classRoom.name
        }
        teacher.classrooms.push(classObjRelation);
        teacher = await teacher.save();
        return res.send(teacher)
    } catch (error) {
        res.send(405).send(error.message);
    }
});

module.exports = router