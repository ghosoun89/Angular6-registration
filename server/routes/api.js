const express =require('express');
const jwt = require('jsonwebtoken');
const router = express.Router()
const User = require('../models/user')

const mongoose = require('mongoose')
const db ="mongodb://ghosoun:ghosoun12@ds159591.mlab.com:59591/ng6db"

//  connect to DB
mongoose.connect(db, err => {
    if(err) {
        console.log('Error!', + err)
    }else{
        console.log('Connected to Mongdb successfuly')
    }
})

router.get('/', (req, res) => {
    res.send('From API route')
})

// register new user in DB and put the data in the model that 
// we required from DB then we save the data in dB
 router.post('/register', (req, res) => {
     let userData = req.body
     let user = new User (userData)
     user.save((error, registeredUser) =>{
         if(error) {
             console.log(error)
         }else {
             let payload = {subject : registeredUser._id}
             let token = jwt.sign(payload, 'secretkey')
             res.status(200).send({token})
         }
     })

 })
 // check if the user email id is exsist in DB and the password 
 // mach the password in the  DB if not send an error else send the data

 router.post('/login', (req, res) => {
     let userData = req.body
      User.findOne({email : userData.email},(error,user) =>{
          if(error) {
              console.log(error)
          }else{
          if(!user) {
              res.status(401).send('invailed Email')
          }else 
          if(user.password !== userData.password){
              res.status(401).send('invailed password')
          }else {
              let payload = {subject : user._id}
              let token = jwt.sign(payload, 'secretkey')
              res.status(200).send({token})
          }
          }
      }) 
 })


module.exports = router