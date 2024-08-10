import React, { useEffect, useState } from 'react';
import './CompletedOrders.css'; // Import the CSS file

function CompletedOrders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function fetchOrders() {
            const response = await fetch('/completed_orders');
            const data = await response.json();
            setOrders(data);
        }

        fetchOrders();
    }, []);

    return (
        <div className="completed-orders">
            <h2>Completed Orders</h2>
            <table>
                <thead>
                    <tr>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index}>
                            <td>{order.price}</td>
                            <td>{order.qty}</td>
                            <td>{new Date(order.timestamp).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CompletedOrders;
