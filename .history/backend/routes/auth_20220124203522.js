const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');


//Create a user using: PSOT "/api/auth/". Doesn't require Auth
router.post('/',[
    body('name','Enter a valid name').isLength({ min: 3 }),
    body('username','Enter a valid email').isEmail(),
    body('password','Password must be atleast 6 character').isLength({ min: 6 }),
],(req,res)=>{
    console.log(req.body);
    const user = User(req.body);
    user.save();
    res.send(req.body);

})

module.exports = router