const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')

app.use(bodyParser.json());
app.use(cors());



const url = 'mongodb+srv://loginpage:login123@cluster0.zx52jzv.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });


const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});


const loginRouter = require('./routes/LoginRoutes');
app.use('/', loginRouter);



app.listen("8520", () => {
  console.log(`Server is running on port: 8520` );
});
