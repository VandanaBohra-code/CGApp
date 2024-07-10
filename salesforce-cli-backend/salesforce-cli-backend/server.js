const express = require('express');
const { exec } = require('child_process');
const app = express();

app.get('/sf-version', (req, res) => {
  exec('sf --version', (error, stdout, stderr) => {
    if (error) {
      return res.status(500).send(`Error: ${error.message}`);
    }
    if (stderr) {
      return res.status(500).send(`Error: ${stderr}`);
    }
    res.send(`Output: ${stdout}`);
  });
});



