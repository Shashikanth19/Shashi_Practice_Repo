const mongoose = require('mongoose')
const express = require('express')

const dbConnection = require('../LimsAssignments/dbConnection')
const router = require('../LimsAssignments/UserRoutes')

const app = express()
app.use(express.json())

app.use('/api',router)
app.listen('9003',(err) =>{
    if(err){
        console.log('error while connecting to port')
    }
    else{
        console.log('connected to port 9000')
    }
})