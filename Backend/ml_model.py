import pandas as pd
import numpy as np
import tensorflow as tf
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import joblib

# Load the pre-trained model
model = joblib.load('model.pkl')

# Load the scaler
scaler = joblib.load('scaler.pkl')

# Function to predict result
def predict_result(input1, input2, input3, input4):
    # Convert input data to a list
    input_data = np.array([[input1, input2, input3, input4]])
    input_data_scaled = scaler.transform(input_data)

    # Make prediction using the pre-trained model
    result = model.predict(input_data_scaled)

    # Convert the result to a Python list
    result_list = result.tolist()

    # Assuming the model returns a single prediction
    return result_list[0]
