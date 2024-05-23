// App.js

import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [ambientTemperature, setAmbientTemperature] = useState('');
  const [exhaustVacuum, setExhaustVacuum] = useState('');
  const [atmosphericPressure, setAtmosphericPressure] = useState('');
  const [relativeHumidity, setRelativeHumidity] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/predict', {
        ambientTemperature: ambientTemperature,
        exhaustVacuum: exhaustVacuum,
        atmosphericPressure: atmosphericPressure,
        relativeHumidity: relativeHumidity
      });
      setResult(response.data.result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Power Plant Prediction</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="temperature">Ambient Temperature:</label>
          <input id="temperature" type="text" value={ambientTemperature} onChange={(e) => setAmbientTemperature(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="vacuum">Exhaust Vacuum:</label>
          <input id="vacuum" type="text" value={exhaustVacuum} onChange={(e) => setExhaustVacuum(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="pressure">Atmospheric Pressure:</label>
          <input id="pressure" type="text" value={atmosphericPressure} onChange={(e) => setAtmosphericPressure(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="humidity">Relative Humidity:</label>
          <input id="humidity" type="text" value={relativeHumidity} onChange={(e) => setRelativeHumidity(e.target.value)} />
        </div>
        <button type="submit" className="btn">Predict</button>
      </form>
      {result && <p className="result">Energy Output: {result}</p>}
    </div>
  );
}

export default App;
