// server.js
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('public'));


// Middleware to parse JSON body
app.use(bodyParser.json());

// POST endpoint to handle form submission
app.post('/register', (req, res) => {
  const formData = req.body;

  // Read existing data
  fs.readFile('data.json', (err, data) => {
    if (err) throw err;

    let existingData = [];
    if (data.length !== 0) {
      existingData = JSON.parse(data);
    }

    // Append new data
    existingData.push(formData);

    // Write updated data to file
    fs.writeFile('data.json', JSON.stringify(existingData), (err) => {
      if (err) throw err;
      console.log('Data written to file');
    });
  });

  res.status(200).send('Data received and saved');
});

// POST endpoint to handle login
app.post('/login', (req, res) => {
  const { email, phoneNumber, password } = req.body;

  // Read existing data
  fs.readFile('data.json', (err, data) => {
    if (err) {
      console.error('Error reading data.json:', err);
      return res.status(500).send('Internal Server Error');
    }

    const existingData = JSON.parse(data);

    // Check if credentials match any existing data
    const user = existingData.find(
      (userData) => userData.email === email && userData.phoneNumber === phoneNumber && userData.password === password
    );

    if (user) {
      res.status(200).send('Login successful');
    } else {
      res.status(401).send('Invalid credentials');
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
