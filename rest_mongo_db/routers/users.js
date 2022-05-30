const router = require('express').Router();
const {User} = require('../models/user');
const bcrypt = require('bcrypt');
const userDebugger = require('debug')('app:user');
const jwt = require('jsonwebtoken');
const auth = require('../middelwares/auth')

router.post('/register', async (req,res)=>{
    let user = new User(req.body);
    let salt = await bcrypt.genSalt(10);
    userDebugger('salt : ',salt);
    user.password = await bcrypt.hash(user.password,salt)
    userDebugger('password :',user.password)
   
    await user.save();
    res.status(201).send(user);
});

router.post('/login', async (req,res)=>{
    let username = req.body.username;
    let user = await User.findOne({username : username});
    if(!user)
        return res.status(400).send('Username or password incorrect');
    let password = req.body.password
    try {
        let bool = await bcrypt.compare(password, user.password)
    if(!bool)
    return res.status(400).send('Username or password incorrect');
    let token = jwt.sign({username : user.username, email : user.email},'secret', { expiresIn: '1m' });
    res.header('x-auth-token',token).send('User logged in.')
    } catch (error) {
        res.status(500).send('Problem with Bcrypt Compare : '+error.message)
    }
    
});

router.get('/me',auth, async (req,res)=>{
    
        res.send('My username is :'+req.payload.username)
});


module.exports = router;