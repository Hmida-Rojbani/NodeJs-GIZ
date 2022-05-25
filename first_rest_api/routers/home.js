const router = require('express').Router();

router.get('/home', (req,res)=>{
    res.send('In Home');
})
router.get('/', (req,res)=>{
    res.send('In Index');
})

module.exports=router;