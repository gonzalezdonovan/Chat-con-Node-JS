import express from 'express'
import logger from 'morgan'
import { Server } from 'socket.io'
import { createServer } from 'node:http'
import fs from 'fs'


const app = express()
const server = createServer(app)

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
})


const port = process.env.PORT || 3000

const filePath = './messages.json'


let messages = []
if (fs.existsSync(filePath)) {
    messages = JSON.parse(fs.readFileSync(filePath))
}


const colors = [
    '#e74c3c', '#3498db', '#2ecc71',
    '#f1c40f', '#9b59b6', '#e67e22'
]

io.on('connection', (socket) => {
    console.log('Usuario conectado')

    
    socket.emit('chat history', messages)

    console.log("Socket conectado:", socket.id)


    socket.on('register', (username) => {
        socket.username = username
        socket.color = colors[Math.floor(Math.random() * colors.length)]
    })

    socket.on('chat message', (msg) => {
        if (!socket.username) return

        const messageData = {
            user: socket.username,
            text: msg,
            color: socket.color
        }

        messages.push(messageData)
        fs.writeFileSync(filePath, JSON.stringify(messages))

        io.emit('chat message', messageData)
    })

    socket.on('disconnect', () => {
        console.log('Usuario desconectado')
    })

    socket.on('clear chat', () => {
        messages = []
        fs.writeFileSync(filePath, JSON.stringify(messages))
        io.emit('chat cleared')
    })

})

app.use(logger('dev'))

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/client/index.html')
})

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})