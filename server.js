const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve gzip compressed assets
app.use(compression());

// Serve static files from build folder
app.use(express.static(path.join(__dirname, 'build')));

// Handle React routing - Send all requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Serving React app from: ${path.join(__dirname, 'build')}`);
});