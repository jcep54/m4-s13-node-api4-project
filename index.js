const express = require('express')

const server = express();

server.use(express.json())

server.get('/testing', ( req, res ) =>{
    res.json(`we're up and cooking`)
})

const port = 9000
const newPort = process.env.PORT

server.listen( port, () =>{
    console.log(`sever running on ${port}`)
})