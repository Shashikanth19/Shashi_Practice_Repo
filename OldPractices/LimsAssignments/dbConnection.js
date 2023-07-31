const mongoose = require('mongoose')

const dbConnection = function () {
    mongoose.connect('mongodb://127.0.0.1/test').then(() => {
        console.log('db connection succesfull')
    }).catch(() =>{
        console.log('error while connecting to db')
    })
}

dbConnection()

module.exports = dbConnection