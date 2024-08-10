from flask import Blueprint, request, jsonify
from services.order_matching import match_orders, get_pending_orders, get_completed_orders

order_blueprint = Blueprint('orders', __name__)

@order_blueprint.route('/place_order', methods=['POST'])
def place_order():
    data = request.json
    buyer_qty = data['buyer_qty']
    buyer_price = data['buyer_price']
    
    match_orders(buyer_price, buyer_qty)
    
    return jsonify({"message": "Order placed and matched if possible."})

@order_blueprint.route('/pending_orders', methods=['GET'])
def pending_orders():
    orders = get_pending_orders()
    return jsonify(orders)

@order_blueprint.route('/completed_orders', methods=['GET'])
def completed_orders():
    orders = get_completed_orders()
    return jsonify(orders)
