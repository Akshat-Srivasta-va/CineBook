import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './server/configs/db.js';
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import axios from 'axios';
import { inngest, functions } from "./server/inngest/index.js"
import showRouter from './server/routes/showRoutes.js';
// this line added by me
import movieRoutes from "./server/routes/movieRoutes.js";
import bookingRouter from './server/routes/bookingRoutes.js';
import adminRouter from './server/routes/adminRoutes.js';
import userRouter from './server/routes/userRoutes.js';

// import { clerkExpressWithAuth } from "@clerk/express";
  

const app = express()
const port = process.env.PORT || 5000;


await connectDB()

//Middleware
app.use(express.json())

app.use(cors({
  origin: ["https://cine-book-henna.vercel.app", "http://localhost:5173"],
  credentials: true
}));


app.use(clerkMiddleware())
// app.use(clerkExpressWithAuth());



// API Routes
 
app.get('/', (req, res) => {
  res.json({ success: true, message: "Server is live and connected!" });
});

 
// app.use("/api/movies", movieRoutes);   // added by me   


// Set up the "/api/inngest" routes with the serve handler
app.use("/api/inngest", serve({ client: inngest, functions }));
app.use('/api/show', showRouter)
app.use('/api/booking', bookingRouter)
app.use('/api/admin', adminRouter)
app.use("/api/user", userRouter);

// app.listen(port, ()=> console.log(`Server listening at http://localhost:${port}`))

app.listen(port, () => console.log(`✅ Server listening on port ${port}`));







