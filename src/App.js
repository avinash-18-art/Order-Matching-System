import React from 'react';
import OrderForm from './components/OrderForm';
import PendingOrders from './components/PendingOrders';
import CompletedOrders from './components/CompletedOrders';
import PriceChart from './components/PriceChart';

function App() {
    return (
        <div>
            <h1>Order Matching System</h1>
            <OrderForm />
            <PendingOrders />
            <CompletedOrders />
            <PriceChart />
        </div>
    );
}

export default App;

