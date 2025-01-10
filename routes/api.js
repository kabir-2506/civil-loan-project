const express = require('express');
const router = express.Router();

// Example of your current routes (if you have others)
router.get('/someOtherRoute', (req, res) => {
  res.send('This is another route!');
});

// Add the /allservices route
router.get('/allservices', (req, res) => {
  const services = [
    { id: 1, name: 'Web Hosting' },
    { id: 2, name: 'SEO Services' },
    { id: 3, name: 'App Development' }
  ];
  res.json({ services });
});

module.exports = router;
