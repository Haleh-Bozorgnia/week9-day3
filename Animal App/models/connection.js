require('dotenv').config();
const mongoose = require ('mongoose');
const DATABASE_URL = process.env.DATABASE_URL;
mongoose.connect(DATABASE_URL);
mongoose.connection
.on('open',()=> console.log('connected to Mongoose'))
.on('close',()=> console.log('Disconnected from Mongoose'))
.on('errore',(errore)=> console.log(errore))

module.exports = mongoose;