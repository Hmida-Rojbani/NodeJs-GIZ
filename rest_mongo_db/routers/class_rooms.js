const router = require('express').Router();
const {ClassRoom} = require('../models/class_room');

//save student
router.post('/', async (req,res)=>{

    let classRoom = new ClassRoom(req.body);
    try {
        classRoom = await classRoom.save();
        res.send(classRoom)
    } catch (error) {
        res.send(405).send(error.message);
    }
});

//retreive all classrooms
router.get('/', async (req,res)=>{
    let classRooms = await ClassRoom.find();
    res.send(classRooms)

})
//find by Id
router.get('/id/:id', async (req,res)=>{
    let classRoom = await ClassRoom.find(req.params.id);
    if(!classRoom)
        return res.status(404).send('ClassRoom not found')
    res.send(classRoom)

});

//find active classes
router.get('/active', async (req,res)=>{
    let classRooms = await ClassRoom.find({active:true})
    if(classRooms.length==0)
        return res.status(204).send();
    res.send(classRooms)

});

module.exports=router