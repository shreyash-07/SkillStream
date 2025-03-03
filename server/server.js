import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.configs.js'
import { clerkWebhooks } from './controllers/webhooks.controllers.js'

//Initialize Express
const app = express()

//Connect Database
await connectDB()

//Middlewares
app.use(cors())

//Routes
app.get('/', (req,res)=> res.send("API Working"))
app.post('/clerk', express.json(),clerkWebhooks)

//PORT
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})