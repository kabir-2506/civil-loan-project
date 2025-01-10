const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api'); // Ensure this path matches your file structure

// Create Express App
const app = express();

// Middleware
app.use(bodyParser.json());

// MongoDB Atlas Connection String
const mongoURI = "mongodb+srv://kabirdpudit:fKMLaFpvMkzx3hBv@cluster0.wpx7i.mongodb.net//";

// Connect to MongoDB Atlas
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Error connecting to MongoDB Atlas:', err));

// Define the /allservices route here
app.get('/allservices', (req, res) => {
  const services = [
    { id: 1, name: 'Web Hosting' },
    { id: 2, name: 'SEO Services' },
    { id: 3, name: 'App Development' }
  ];
  res.json({ services });
});

// Use API routes from ./routes/api
app.use('/api', apiRoutes); // API routes are prefixed with '/api'

// Start the Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
