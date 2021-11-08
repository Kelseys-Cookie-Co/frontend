const express = require('express');
const server = express();
const userRouter = require('./routers/user-router')
const addressRouter = require('./routers/address-router')

server.use(express.json())
server.use(userRouter)
server.use(addressRouter)

//error middleware
server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong",
    })
})

module.exports = server;