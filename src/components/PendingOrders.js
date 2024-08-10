import React, { useEffect, useState } from 'react';
import './PendingOrders.css'; // Import the CSS file

function PendingOrders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function fetchOrders() {
            const response = await fetch('/pending_orders');
            const data = await response.json();
            setOrders(data);
        }

        fetchOrders();
    }, []);

    return (
        <div className="pending-orders">
            <h2>Pending Orders</h2>
            <table>
                <thead>
                    <tr>
                        <th>Buyer Qty</th>
                        <th>Buyer Price</th>
                        <th>Seller Price</th>
                        <th>Seller Qty</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index}>
                            <td>{order.buyer_qty}</td>
                            <td>{order.buyer_price}</td>
                            <td>{order.seller_price}</td>
                            <td>{order.seller_qty}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PendingOrders;
