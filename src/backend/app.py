from flask import Flask
from flask_cors import CORS
from routes.orders import order_blueprint

app = Flask(__name__)
CORS(app)  # Enable CORS to allow requests from the frontend

# Register the blueprint for order-related routes
app.register_blueprint(order_blueprint)

if __name__ == '__main__':
    app.run(debug=True)
