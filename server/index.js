import express from 'express';
import * as dotenv from 'dotenv'
import {authRouters} from './routers/authRouters.js';
import cookieParser from 'cookie-parser';

import {db} from './db.js';
import cors from 'cors'


dotenv.config();

const PORT = process.env.PORT || 4000;
//db connection
db();

const app = express();
app.use(cookieParser())
app.use(express.json())

app.use(cors({
    origin: 'http://localhost:5173', 
    credentials:true
}));



app.use('/api/v1/', authRouters);

app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`))
