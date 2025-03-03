import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.configs.js'
import { clerkWebhooks } from './controllers/webhooks.controllers.js'
import educatorRouter from './routes/educatorRoute.js'
import { clerkMiddleware } from '@clerk/express'
import connectCloudinary from './configs/cloudinary.configs.js'

//Initialize Express
const app = express()

//Connect Database
await connectDB()
await connectCloudinary()

//Middlewares
app.use(cors())
app.use(clerkMiddleware())

//Routes
app.get('/', (req,res)=> res.send("API Working"))
app.post('/clerk', express.json(),clerkWebhooks)
app.use('/api/educator', express.json(), educatorRouter)

//PORT
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})