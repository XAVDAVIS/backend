// Dependencies 
const express = require('express');


// Initialize the Express App 
const app = express();

// COnfigure App Settings 
require('dotenv').config();

const { PORT = 4000, MONGODB_URL } = process.env;

// Mount Middleware

// Mount Routes 
app.get('/', (req, res ) => {
    res.send('Hello World');
})

// tell Express to Listen 
app.listen(PORT, () => {
    console.log(`Express is listening on port:${PORT}`);
})