import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js'
import { ConnectDb } from './utils/connectDB.js';
import todoRoutes from './routes/todo.routes.js'
import sessionRoutes from './routes/sessions.route.js'
import cookieParser from 'cookie-parser';



const app =express();


app.use(express.json());


app.use(cors());


dotenv.config();


app.use(cookieParser());


app.get('/',(req,res)=>{
    res.send("Hello")
})



app.use('/api/users',userRoutes)
app.use('/api/todos',todoRoutes)
app.use('/api/session',sessionRoutes)




const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`App is Running on PORT ${PORT}`);
    ConnectDb();
})