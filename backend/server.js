const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// uri of mongoDB atlas web app (i've connected with compass)
const URI = 'mongodb+srv://Vishnu:mongoDB123@cluster0.w0sfe.mongodb.net/exercise_tracker?retryWrites=true&w=majority';
mongoose.connect(URI, { useNewUrlParser: true });
const con = mongoose.connection;

// making the connection object 'ON'
con.on('open', (err) => {
    if(err) {
        console.log("ERROR in DB connection");
    }
    else {
        console.log("DB connected!");
    }
});


// creating express server(app)
const app = express();
// middleware for parsing json data from DB
app.use(express.json());
// middleware for cors
app.use(cors());

// using the router middlewares
const userRouter = require('./routes/user.router');
const exerciseRouter = require('./routes/exercise.router');

app.use('/user', userRouter);
app.use('/exercise', exerciseRouter);

// for the home page
app.get('/', (req, res) => {
    res.end('Welcome to Home Page!');
});

// listen() method starts the server
const PORT = 5000;
app.listen(5000, () => {
    console.log(`server is running at ${PORT}`);
});