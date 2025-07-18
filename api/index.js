import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import cors from 'cors'
import cookieParser from 'cookie-parser';
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connected to MongoDB')
}).catch((err)=>{
    console.log(err)
})
const app = express();
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json())
app.use(cookieParser());
app.listen(3000,()=>{
    console.log("server listening on port 3000")
})

app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes)


app.use((err,req,res,next)=>{
    const statusCode = err.statusCode||500;
    const message = err.message || 'Internal Server Error'
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode,
    })
})