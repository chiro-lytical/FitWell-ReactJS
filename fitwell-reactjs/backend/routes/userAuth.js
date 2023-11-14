const express=require('express')
const router=express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const UserAuthService = require('../services/UserAuthService')
require('dotenv').config()

router.post('/userLogin', async(req, res)=>{
    const response= await UserAuthService.userLogin(req.body);
    return res.send(response);
})

router.post('/createUser', async(req,res)=>{
    const response=await UserAuthService.createUser(req.body);
    return res.send(response)
})


module.exports=router;