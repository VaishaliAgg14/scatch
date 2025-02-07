const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const {ownerRouter , userRouter, productRouter} = require('./routes/index');
const cookieParser  = require('cookie-parser');
const path = require('path');
const connection = require('./config/db.config')
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", 'ejs');

app.use('/owners',ownerRouter);
app.use('/users',userRouter);
app.use('/products' , productRouter);

app.get('/', (req, res) =>{
    res.send("hello world");
})



app.listen(PORT,() => {
    console.log(`Server running on ${PORT}`)
})