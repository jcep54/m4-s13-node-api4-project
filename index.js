const express = require('express')
const cors = require('cors')
require('dotenv').config()

console.log(process.env.PORT, process.env.NODE_ENV)

const server = express();

server.use(express.json())
server.use(cors())

server.get('/testing', ( req, res ) =>{
    res.json(`we're up and cooking`)
})

const port = process.env.PORT || 9000

server.listen( port, () =>{
    console.log(`sever running on ${port}`)
})