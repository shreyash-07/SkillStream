import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.configs.js'
import { clerkWebhooks, stripeWebhooks } from './controllers/webhooks.controllers.js'
import educatorRouter from './routes/educatorRoute.js'
import { clerkMiddleware } from '@clerk/express'
import connectCloudinary from './configs/cloudinary.configs.js'
import courseRouter from './routes/courseRoute.js'
import userRouter from './routes/userRoute.js'

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
app.use('/api/course', express.json(), courseRouter)
app.use('/api/user', express.json(), userRouter)
app.post('/stripe', express.raw({type: 'application/json'}), stripeWebhooks)

//PORT
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})