from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class PendingOrder(db.Model):
    __tablename__ = 'PendingOrders'
    id = db.Column(db.Integer, primary_key=True)
    buyer_qty = db.Column(db.Integer)
    buyer_price = db.Column(db.Float)
    seller_price = db.Column(db.Float, nullable=True)
    seller_qty = db.Column(db.Integer, nullable=True)

class CompletedOrder(db.Model):
    __tablename__ = 'CompletedOrders'
    id = db.Column(db.Integer, primary_key=True)
    price = db.Column(db.Float)
    qty = db.Column(db.Integer)
    timestamp = db.Column(db.DateTime, server_default=db.func.now())
