const express = require('express')
const mongoose = require('mongoose')
const Dishes = require('../dishesSchema')
const Router = express.Router()
Router.use(express.json())


Router.get('/', (req, res)=>{
    Dishes.find()
          .then((data) =>{
              res.send(data)
          })
          .catch((err) =>{
              console.log(err)
          })
})
Router.get('/:id', (req, res)=>{
    Dishes.findById(req.params.id)
          .then((data) =>{
              res.send(data)
          })
          .catch((err) =>{
              console.log(err)
          })
})
Router.post('/', (req, res)=>{

    const dish = new Dishes(req.body)

    dish.save()
          .then((data) =>{
              res.send('Added new dish'+data)
          })
          .catch((err) =>{
              console.log(err)
          })
})
Router.delete('/:id', (req, res)=>{
    Dishes.findByIdAndDelete(req.params.id)
          .then((data) =>{
              res.send("Successfully Deleted....")
          })
          .catch((err) =>{
              console.log(err)
          })
})
Router.put('/:id', (req, res)=>{
    Dishes.findByIdAndUpdate(req.params.id, req.body)
          .then((data) =>{
              res.send("Successfully Updated....")
          })
          .catch((err) =>{
              console.log(err)
          })
})
module.exports = Router
