const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const corsOptions = {
    origin: 'http://localhost:3000',
}

require('./database')
const uri = process.env.MONGO_URI || 'mongodb://localhost/crm'
mongoose.Promise = global.Promise
mongoose.connect(uri, { useMongoClient: true })

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors(corsOptions))

require('./structure/server.routes')(app)

module.exports = app