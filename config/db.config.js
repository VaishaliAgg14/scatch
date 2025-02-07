const mongoose = require('mongoose');

const connection = mongoose.connect(process.env.MONGODB_URI).then(() =>{
    console.log('Database connected')
}).catch((err) => {
    console.log('Failed to connect');
    console.log(err)
})

module.exports= connection;