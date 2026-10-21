require('dotenv').config()

const express = require('express')
const cors = require('cors')
const router = require('./routers/router')
const connectDB = require('./configs/db.config')

const app = express()


app.use(express.json())


app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))


app.use(router)


const PORT = process.env.PORT || 5000


const startServer = async () => {
    await connectDB()

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
}

startServer()