import React, { useState } from 'react';
import './OrderForm.css'; 

function OrderForm() {
    const [buyerQty, setBuyerQty] = useState('');
    const [buyerPrice, setBuyerPrice] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Handle form submission
    };

    return (
        <div className="order-form">
            <h2>Place Order</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Buyer Quantity:
                    <input
                        type="number"
                        value={buyerQty}
                        onChange={(e) => setBuyerQty(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Buyer Price:
                    <input
                        type="number"
                        step="0.01"
                        value={buyerPrice}
                        onChange={(e) => setBuyerPrice(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default OrderForm;
