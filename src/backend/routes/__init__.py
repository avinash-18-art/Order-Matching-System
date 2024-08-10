from flask import Blueprint

# Create a blueprint for the orders routes
order_blueprint = Blueprint('orders', __name__)

# Import the order routes (this is where Flask will find and register them)
from .orders import *
