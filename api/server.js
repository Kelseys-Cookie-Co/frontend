const express = require('express');
const server = express();
const userRouter = require('../api/routers/user-router')

server.use(express.json())
server.use(userRouter)

//error middleware
server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong",
    })
})

module.exports = server;