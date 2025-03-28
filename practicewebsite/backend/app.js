const express=require('express')
const app=express()
const dotenv=require('dotenv')
const path=require('path')
dotenv.config({path:path.join(__dirname,'Config','config.env')})
const Courses=require('./routes/Courses')
const Applicationpath=require('./routes/Applicationpath')
const login=require('./routes/Login')
const Connectdb = require('./Config/Connectdb')
const cors = require('cors');
const PORT=process.env.PORT||8000


app.use(express.json());
app.use(cors());

app.use('/api/v1/',Courses)
app.use('/api/v1/',Applicationpath)
app.use('/api/v1/',login)

Connectdb()


app.listen(PORT,()=>{
    console.log(`server running on ${PORT} in ${process.env.NODE_ENV}`)
})
