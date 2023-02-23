'use strict';

const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const contactRouter = require('./api/routes/contact');

dotenv.config();
const MONGODB_URI = `mongodb://${process.env.MONGODB_IP}:${process.env.MONGODB_PORT}/${process.env.MONGODB_USER}`;

const app = express();
const port = process.env.PORT || 8000;

// Set up security headers using helmet middleware
app.use(helmet());

// Implement rate limiting to prevent DoS attacks
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Enable CORS for specific origins
const whitelist = ['http://localhost:3000'];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};
app.use(cors(corsOptions));

app.use(express.json({
    limit: '50mb'
}));
app.use(express.urlencoded({
    extended: true
}));

app.use('/api/contacts', contactRouter);

mongoose.set('strictQuery', true);
mongoose
    .connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

app.listen(port, () => console.log(`Server is running on port ${port}`));