import os

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'postgresql://yourusername:yourpassword@localhost/order_matching')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
