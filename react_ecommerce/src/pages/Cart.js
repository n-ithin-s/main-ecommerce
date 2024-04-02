import React, { useState, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Cart() {
    const [cartItems, setCartItems] = useState([]);


    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);

    const calculateSubtotal = (item) => {
        return item.price * item.quantity;
    };

    const calculateTotal = () => {
        let total = 0;
        cartItems.forEach(item => {
            total += calculateSubtotal(item);
        });
        return total;
    };

    const navigate = useNavigate();

    const handleIncreaseQuantity = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems[index].quantity++;
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    const handleRemoveItem = (index) => {
        const updatedCartItems = cartItems.filter((item, i) => i !== index);
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };
    return (
        <>
            <Header />

            <div className='space'>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-8">
                        
                        {cartItems.map((item, index) => (
                            <div key={index} className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={item.image} alt={item.name} className="img-fluid rounded-start" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">${item.price}</p>
                                            <div className="d-flex align-items-center">
                                                <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => handleIncreaseQuantity(index)}>+</button>
                                                <span className="me-2">Quantity: {item.quantity}</span>
                                                <button className="btn btn-sm btn-outline-secondary" onClick={() => handleRemoveItem(index)}>Remove</button>
                                            </div>
                                            <p className="card-text mt-2">Subtotal: ${calculateSubtotal(item)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-lg-4">
    <div className="card border-primary mb-3">
        <div className="card-body">
            <h5 className="card-title text-dark">Price Details</h5>
            <hr className="my-4" />
            <div className="d-flex justify-content-between align-items-center mb-3">
                <span>Price (Total)</span>
                <span>${calculateTotal().toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <span>Delivery Fee</span>
                <span className="text-decoration-line-through">$40</span>
                <span>FREE</span>
            </div>
            <hr className="my-4" />
            <div className="d-flex justify-content-between align-items-center">
                <span>Total</span>
                <span>${calculateTotal().toFixed(2)}</span>
            </div>
            <button onClick={() => navigate('/checkout', { state: { total: calculateTotal(), cartItems: cartItems } })} className="btn btn-primary mt-4">
                Proceed to Checkout
            </button>
        </div>
    </div>
</div>

                </div>
            </div>
            </div>
            <Footer />
        </>
    );

}

export default Cart;
