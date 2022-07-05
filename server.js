const express = require('express')
const productRouter=require('./routes/productRoutes')
const connectdb=require('./config/connectDb')
require('dotenv').config()
//console.log(process.env.MONGO_URI)
const app = express()
app.use(express.json())

connectdb()
app.use('/products',productRouter)
const port = 5000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))