const express = require('express')
const dotenv = require('dotenv')
const { chats } = require('./data/data')
const connectDB = require('./config/db')
const userRoutes= require('./routes/userRoutes')
const { errorHandler, notFound } = require('./middlewares/errorMiddleware')


const app = express()
dotenv.config()

app.use(express.json())

connectDB()

app.get('/', (req, res) =>{
    res.send("Hello")
})
// app.get('/api/chat', (req, res) =>{
//     res.send(chats);
// })
// app.get('/api/chat/:id', (req, res) =>{
//     // console.log(req.params.id)
//     const singleChat  = chats.find(c => c._id === req.params.id)
//     res.send(singleChat)
// })

app.use('/api/user', userRoutes)


app.use(notFound)
app.use(errorHandler)

const PORT  = process.env.PORT || 5000;
// console.log(process.env.PORT)
app.listen(PORT, () =>{
    console.log(`Server is running at PORT ${PORT}`)
})