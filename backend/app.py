from flask import Flask, request, jsonify
from flask_cors import CORS
from model import predict_image, get_history
import os

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route("/")
def home():
    return "AI Monument Guide Backend Running 🚀"


@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    file = request.files['image']

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(file_path)

    # 🧠 AI Prediction
    monument = predict_image(file_path)

    # 📚 History from Ollama
    history = get_history(monument)

    return jsonify({
        "monument": monument,
        "history": history,
        "result": f"{monument}. {history}"
    })


if __name__ == "__main__":
    app.run(debug=True)