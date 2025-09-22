import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './server/configs/db.js';
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./server/inngest/index.js"
import showRouter from './server/routes/showRoutes.js';
// this line added by me
import movieRoutes from "./server/routes/movieRoutes.js";
import bookingRouter from './server/routes/bookingRoutes.js';
import adminRouter from './server/routes/adminRoutes.js';
import userRouter from './server/routes/userRoutes.js';
// hb



const app = express()
const port = 3000;

await connectDB()

//Middleware
app.use(express.json())
app.use(cors())
app.use(clerkMiddleware())

// API Routes
app.get('/', (req, res)=> res.send('Server is Live'))  
 
// app.use("/api/movies", movieRoutes);   // added by me

// Set up the "/api/inngest" (recommended) routes with the serve handler
app.use("/api/inngest", serve({ client: inngest, functions }));
app.use('/api/show', showRouter)
app.use('/api/booking', bookingRouter)
app.use('/api/admin', adminRouter)
app.use("/api/user", userRouter);

app.listen(port, ()=> console.log(`Server listening at https://localhost:${port}`)
)



