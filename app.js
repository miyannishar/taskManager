const express = require('express');
const app = express();
const port = 3000;
const tasks = require('./routes/routes');
const dbConnect = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')


// Middleware
app.use(express.json())

// Routes
app.use('/api/v1/tasks', tasks)
app.use(notFound)

const start = async() =>{
    try {
        await dbConnect(process.env.MONGO_URI)
        app.listen(port, console.log(`SERVER IS LISTENING AT ${port}`));
    } catch (error) {
        console.log(error);
    }
}



start();