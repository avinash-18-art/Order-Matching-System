-- Create PendingOrders table
CREATE TABLE PendingOrders (
    id SERIAL PRIMARY KEY,
    buyer_qty INT,
    buyer_price DECIMAL,
    seller_price DECIMAL DEFAULT NULL,
    seller_qty INT DEFAULT NULL
);

-- Create CompletedOrders table
CREATE TABLE CompletedOrders (
    id SERIAL PRIMARY KEY,
    price DECIMAL,
    qty INT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
