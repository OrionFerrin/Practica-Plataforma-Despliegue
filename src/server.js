const express = require('express');
const app = express();
const products = require('./models/products');

// Middleware to parse JSON
app.use(express.json());

// Serve static files from 'public' folder
app.use(express.static('public'));

// Products API endpoint
app.get('/products', (req, res) => {
  res.json(products);
});

// Start server on port 3000
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});