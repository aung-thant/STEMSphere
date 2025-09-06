const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello, STEMSphere!</h1><p>Welcome to the STEM education platform.</p>');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
