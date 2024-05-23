// Backend (Node.js) - server.js

const express = require('express');
const bodyParser = require('body-parser');
const { predictResult } = require('./mlModel'); // Assuming predictResult is a function in mlModel.js

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.post('/predict', (req, res) => {
  const { input1, input2, input3, input4 } = req.body;
  // Call the ML model function with the input data
  const result = predictResult(input1, input2, input3, input4);
  res.json({ result });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
