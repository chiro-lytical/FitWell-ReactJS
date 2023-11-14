const express=require('express')
const router=express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const AuthServices = require('../services/AdminAuthServices')
require('dotenv').config()

router.post('/adminLogin', async(req, res)=>{
    const response= await AuthServices.adminLogin(req.body);
    return res.send(response);
})

router.post('/createAdmin', async(req,res)=>{
    const response=await AuthServices.createAdmin(req.body);
    return res.send(response)
})


module.exports=router;