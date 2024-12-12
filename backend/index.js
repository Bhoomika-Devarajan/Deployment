const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const authController = require('./controllers/authController'); // Ensure this path is correct
const propertyController = require('./controllers/propertyController')
const uploadController = require('./controllers/uploadController');
const app = express();

app.use('/images',express.static('public/images'))
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/auth', authController);
app.use('/property', propertyController);
app.use('/upload', uploadController)

// Check if environment variables are loaded
if (!process.env.MONGO_URL || !process.env.PORT) {
    console.error('Environment variables MONGO_URL or PORT are missing');
    process.exit(1);
}

// MongoDB connect
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('MongoDB has been started successfully');
        // Starting server
        app.listen(process.env.PORT, () => {
            console.log(`Server has been started successfully on port ${process.env.PORT}`);
        });
    })
    .catch(err => {
        console.error('Could not connect to MongoDB:', err);
        process.exit(1);
    });
