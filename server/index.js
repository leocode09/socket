const express = require('express')
const app = express()
const http = require('http')
const { Server } = require('socket.io')
const server = http.createServer(app)

const cors = require('cors')
app.use(cors())

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    }
})

io.on('connection', (socket) => {
    console.log(`Player connected: ${socket.id}`);

    socket.on('emit_message', (data) => {
        console.log(data);
    })
})

server.listen(3001, () => {
    console.log('>_____ Server Running _____');
})