const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', apiRoutes);

// Connect to MongoDB
mongoose.connect('mongodb+srv://kabirdpudit:fKMLaFpvMkzx3hBv@cluster0.mongodb.net/civilloan?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected to Atlas'))
    .catch(err => console.error(err));
