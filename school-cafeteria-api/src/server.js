const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const products = require('./models/products');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to parse JSON
app.use(express.json());

// Serve static files from 'public' folder
app.use(express.static('public'));

// Products API endpoint
app.get('/products', (req, res) => {
  res.json(products);
});

// Start server on port 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});