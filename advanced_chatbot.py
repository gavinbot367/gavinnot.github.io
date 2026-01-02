from flask import Flask, request, jsonify
from transformers import AutoModelForCausalLM, AutoTokenizer
import requests

# Initialize the app
app = Flask(__name__)

# Load the NLP model and tokenizer
model_name = "gpt2"  # Replace with a more advanced model if required
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name)

# Helper function: Generate responses
def generate_response(user_input):
    inputs = tokenizer.encode(user_input, return_tensors="pt")
    outputs = model.generate(inputs, max_length=150, num_return_sequences=1, temperature=0.7)
    return tokenizer.decode(outputs[0], skip_special_tokens=True)

# Route: Base route to check connectivity
@app.route('/')
def home():
    return "Welcome to the Advanced Chatbot API!"

# Route: Chat endpoint
@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get("message")
    if not user_message:
        return jsonify({"error": "Message is required"}), 400
    
    # Generate chatbot response
    response = generate_response(user_message)
    return jsonify({"response": response})

# Route: Real-time information retrieval (e.g., News)
@app.route('/realtime', methods=['GET'])
def realtime():
    query = request.args.get("query")
    if not query:
        return jsonify({"error": "Query is required"}), 400
    
    # Use an API to fetch real-time data (e.g., Bing or NewsAPI)
    api_url = f"https://newsapi.org/v2/everything?q={query}&apiKey=YOUR_NEWSAPI_KEY"
    response = requests.get(api_url)
    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return jsonify({"error": "Failed to fetch real-time information!"}), 500

# Run the app
if __name__ == "__main__":
    app.run(debug=True)
