// mlModel.js

const tf = require('@tensorflow/tfjs-node');
const path = require('path');

// Load the pre-trained model
const modelPath = path.join(__dirname, 'model.h1');
const model = tf.loadLayersModel('file://' + modelPath);

// Function to predict result
async function predictResult(input1, input2, input3, input4) {
  const inputData = [parseFloat(input1), parseFloat(input2), parseFloat(input3), parseFloat(input4)];
  const inputTensor = tf.tensor2d([inputData]);
  const prediction = await model.predict(inputTensor);
  const result = prediction.dataSync()[0];
  return result;
}

module.exports = { predictResult };
