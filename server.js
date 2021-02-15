const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const db = mongoose.connection
require('dotenv').config()
dotenv.config()
const app = express()
const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI


app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Controllers
const commentsController = require('./controllers/comments_controller.js')
app.use('/comments', commentsController)


//Database Connection
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
// DB connection test
mongoose.connection.on('error', err =>
  console.log(
    err.message,
    ' is Mongod not running?/Problem with Atlas Connection?'
  )
)
mongoose.connection.on('connected', () =>
  console.log('mongo connected: ', MONGODB_URI)
)
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

// Listening
app.listen(PORT, ()=>{
    console.log('listening on port: ', PORT)
})
