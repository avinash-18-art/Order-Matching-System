import psycopg2
from psycopg2 import sql
from config import Config

def get_db_connection():
    conn = psycopg2.connect(Config.SQLALCHEMY_DATABASE_URI)
    return conn

def match_orders(buyer_price, buyer_qty):
    conn = get_db_connection()
    cur = conn.cursor()

    # Find matching sell orders
    cur.execute("""
        SELECT id, seller_price, seller_qty 
        FROM PendingOrders 
        WHERE seller_price <= %s 
        ORDER BY seller_price ASC, id ASC 
        FOR UPDATE
    """, (buyer_price,))

    orders = cur.fetchall()
    matched_qty = 0

    for order in orders:
        order_id, seller_price, seller_qty = order
        qty_to_match = min(buyer_qty, seller_qty)

        # Insert into CompletedOrders table
        cur.execute("""
            INSERT INTO CompletedOrders (price, qty) 
            VALUES (%s, %s)
        """, (seller_price, qty_to_match))

        matched_qty += qty_to_match
        buyer_qty -= qty_to_match

        if buyer_qty == 0:
            cur.execute("DELETE FROM PendingOrders WHERE id = %s", (order_id,))
            break
        else:
            cur.execute("""
                UPDATE PendingOrders 
                SET seller_qty = seller_qty - %s 
                WHERE id = %s
            """, (qty_to_match, order_id))

    # If there's remaining buyer_qty, add it to PendingOrders
    if buyer_qty > 0:
        cur.execute("""
            INSERT INTO PendingOrders (buyer_qty, buyer_price) 
            VALUES (%s, %s)
        """, (buyer_qty, buyer_price))

    conn.commit()
    cur.close()
    conn.close()

def get_pending_orders():
    conn = get_db_connection()
    cur = conn.cursor()

    cur.execute("SELECT * FROM PendingOrders")
    orders = cur.fetchall()

    cur.close()
    conn.close()

    return orders

def get_completed_orders():
    conn = get_db_connection()
    cur = conn.cursor()

    cur.execute("SELECT * FROM CompletedOrders ORDER BY timestamp ASC")
    orders = cur.fetchall()

    cur.close()
    conn.close()

    return orders
