const express = require('express')
const mongoose = require('mongoose')
const Leaders = require('../leadersSchema')
const Router = express.Router()
Router.use(express.json())


Router.get('/', (req, res)=>{
    Leaders.find()
          .then((data) =>{
              res.send(data)
          })
          .catch((err) =>{
              console.log(err)
          })
})
Router.get('/:id', (req, res)=>{
    Leaders.findById(req.params.id)
          .then((data) =>{
              res.send(data)
          })
          .catch((err) =>{
              console.log(err)
          })
})
Router.post('/', (req, res)=>{

    const dish = new Leaders(req.body)

    dish.save()
          .then((data) =>{
              res.send('Added new leader'+data)
          })
          .catch((err) =>{
              console.log(err)
          })
})
Router.delete('/:id', (req, res)=>{
    Leaders.findByIdAndDelete(req.params.id)
          .then((data) =>{
              res.send("Successfully Deleted....")
          })
          .catch((err) =>{
              console.log(err)
          })
})
Router.put('/:id', (req, res)=>{
    Leaders.findByIdAndUpdate(req.params.id, req.body)
          .then((data) =>{
              res.send("Successfully Updated....")
          })
          .catch((err) =>{
              console.log(err)
          })
})
module.exports = Router
