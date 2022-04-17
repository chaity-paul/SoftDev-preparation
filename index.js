const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Dishes = require('./dishesSchema')
const Promotions = require('./promotionsSchema')
const Leaders = require('./leadersSchema')
app.use(express.json())

const dishesRouter = require('./routes/dishes')
const leadersRouter = require('./routes/leaders')
const promotionsRouter = require('./routes/promotions')

url = "mongodb://localhost:27017/shop"

mongoose.connect(url)
        .then(() =>{
            console.log("Database connected......")

            app.listen(3000, () =>{
                console.log("Server is running...")
            })
        })
        .catch((err) =>{
            console.log(err)
        })

app.use('/dishes', dishesRouter)
app.use('/promotions', promotionsRouter)
app.use('/leaders', leadersRouter)