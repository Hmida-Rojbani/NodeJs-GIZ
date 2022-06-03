const router = require('express').Router();
const {User} = require('../models/user');
const userDebugger = require('debug')('app:user');
const auth = require('../middelwares/auth');

router.post('/register', async (req,res)=>{
    let user = new User(req.body);
   
    user.password = await user.hash_password(req.body.password);
    userDebugger('password :',user.password)
   
    await user.save();
    res.status(201).send({
        message: 'User successfully created!',
        result: user,
      });
});

router.post('/login', async (req,res)=>{
    userDebugger('Login body :',req.body )
    let username = req.body.username;
    let user = await User.findOne({username : username});
    if(!user)
        return res.status(401).send({
            message: 'Authentication failed',
          });
    let password = req.body.password
    try {
        let bool = await user.verify_password(password,user.password);
    if(!bool)
    return res.status(401).send({
        message: 'Authentication failed',
      });
    let token = user.create_jwt({username : user.username, email : user.email},{ expiresIn: '1m' });
    res.header('Access-Control-Expose-Headers','x-auth-token').header('x-auth-token',token).send({_id:user._id})
    } catch (error) {
        res.status(500).send({
            message: `Problem with Bcrypt Compare : +${error.message}`
          })
    }
    
});

router.get('/user-profile/:id',auth, async (req,res)=>{
    let user = await User.findById(req.params.id);
        res.send({
            msg : user
        })
});


module.exports = router;