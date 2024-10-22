import express from 'express';
import { PORT,FRONT_END_URL } from "./config.js";
import cors from 'cors'
import router from './routes/tasks_routes.js';
import {dirname,join} from 'path'
import {fileURLToPath} from 'url'

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url)) 

app.use(express.json())
app.use(cors({
    //si deseo que solo se conecte este
    origin:FRONT_END_URL,
    methods: ['GET','POST','PUT','DELETE'],
    credentials: true,
}))

app.use(router)

app.use(express.static(join(__dirname,'../client/dist')))

app.listen(PORT, ()=>{
    console.log("hola mundo");
})

