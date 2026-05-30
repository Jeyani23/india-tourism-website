import torch
from PIL import Image
from transformers import CLIPProcessor, CLIPModel
import requests

# 🤖 Load CLIP Model
model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

# 🏛️ Monument Labels
labels = [
    "Taj Mahal in Agra India",
    "Qutub Minar in Delhi India",
    "Meenakshi Temple in Madurai Tamil Nadu",
    "India Gate in New Delhi India",
    "Red Fort in Delhi India",
    "Gateway of India in Mumbai Maharashtra",
    "Mysore Palace in Karnataka India",
    "Hawa Mahal in Jaipur Rajasthan",
    "Charminar in Hyderabad Telangana",
    "Lotus Temple in Delhi India",
    "Golden Temple in Amritsar Punjab",
    "Sun Temple in Konark Odisha",
    "Khajuraho Temples in Madhya Pradesh",
    "Ajanta Caves in Maharashtra",
    "Ellora Caves in Maharashtra India",
    "Brihadeeswarar Temple in Thanjavur Tamil Nadu",
    "Sanchi Stupa in Madhya Pradesh India",
    "Victoria Memorial in Kolkata India",
    "Amer Fort in Jaipur Rajasthan India",
    "Gol Gumbaz in Karnataka",
    "Rani ki Vav in Gujarat India",
    "Fatehpur Sikri in Uttar Pradesh India",
    "Jaisalmer Fort in Rajasthan India",
    "Tirupati Balaji Temple in Andhra Pradesh India",
    "Kedarnath Temple in Uttarakhand India"
]

# 📷 Predict Monument
def predict_image(image_path):
    image = Image.open(image_path).convert("RGB")

    inputs = processor(
        text=labels,
        images=image,
        return_tensors="pt",
        padding=True
    )

    outputs = model(**inputs)
    probs = outputs.logits_per_image.softmax(dim=1)

    index = probs.argmax().item()
    return labels[index]


# 🤖 Ask Ollama (Local AI)
def ask_ollama(prompt):
    url = "http://localhost:11434/api/generate"

    data = {
        "model": "phi",
        "prompt": prompt,
        "stream": False
    }

    try:
        response = requests.post(url, json=data)
        return response.json()["response"]
    except:
        return "Sorry, I couldn't fetch history. Please check Ollama."


# 📚 Get Monument History
def get_history(monument):
    prompt = f"Give simple 5 line history about {monument}"
    return ask_ollama(prompt)