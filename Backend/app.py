from flask import Flask, request, jsonify
from flask_cors import CORS
from ml_model import predict_result

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    input1 = float(data.get('ambientTemperature'))
    input2 = float(data.get('exhaustVacuum'))
    input3 = float(data.get('atmosphericPressure'))
    input4 = float(data.get('relativeHumidity'))

    # Ensure all inputs are provided
    if None in (input1, input2, input3, input4):
        return jsonify({'error': 'All inputs are required'}), 400

    # Your prediction logic here
    result = predict_result(input1, input2, input3, input4)

    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)


