from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.vgg16 import preprocess_input
import numpy as np

app = Flask(__name__)

# Load your trained model
model = load_model('model.h5')

# Define your class names based on your dataset
class_names = {0: 'Healthy', 1: 'Disease1', 2: 'Disease2', 3: 'Disease3', 4: 'Disease4'}

@app.route('/predict', methods=['POST'])
def predict():
    # Get the image from the request
    img_file = request.files['file']
    img = image.load_img(img_file, target_size=(224, 224))
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = preprocess_input(img_array)

    # Make predictions using your model
    preds = model.predict(img_array)
    class_index = np.argmax(preds[0])
    predicted_class = class_names.get(class_index, 'Unknown')
    confidence = float(preds[0][class_index])

    # Print debug information
    print(f"Predicted class: {predicted_class}, Confidence: {confidence}")

    return jsonify({'prediction': predicted_class, 'confidence': confidence})

if __name__ == '__main__':
    app.run(debug=True)



