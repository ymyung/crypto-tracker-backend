require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const walletRoute = require('./routes/walletRoute')

// configure express
const app = express()

// cors
app.use(cors())

// parse data to json
app.use(express.json())

// debugging
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/wallet', walletRoute)

// configure mongoose
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to MongoDB and listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })