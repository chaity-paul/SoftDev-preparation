const express = require('express')
const mongoose = require('mongoose')
const Promotions = require('../promotionsSchema')
const Router = express.Router()
Router.use(express.json())


Router.get('/', (req, res)=>{
    Promotions.find()
          .then((data) =>{
              res.send(data)
          })
          .catch((err) =>{
              console.log(err)
          })
})
Router.get('/:id', (req, res)=>{
    Promotions.findById(req.params.id)
          .then((data) =>{
              res.send(data)
          })
          .catch((err) =>{
              console.log(err)
          })
})
Router.post('/', (req, res)=>{

    const dish = new Promotions(req.body)

    dish.save()
          .then((data) =>{
              res.send('Added new promotions'+data)
          })
          .catch((err) =>{
              console.log(err)
          })
})
Router.delete('/:id', (req, res)=>{
    Promotions.findByIdAndDelete(req.params.id)
          .then((data) =>{
              res.send("Successfully Deleted....")
          })
          .catch((err) =>{
              console.log(err)
          })
})
Router.put('/:id', (req, res)=>{
    Promotions.findByIdAndUpdate(req.params.id, req.body)
          .then((data) =>{
              res.send("Successfully Updated....")
          })
          .catch((err) =>{
              console.log(err)
          })
})
module.exports = Router
