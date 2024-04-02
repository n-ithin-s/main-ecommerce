import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/Myorder.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Update = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const userId = sessionStorage.getItem('userId');

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/order/');
                const userOrders = response.data.filter(order => order.user === parseInt(userId));

                const updatedOrders = await Promise.all(userOrders.map(async order => {
                    const updatedProductList = await Promise.all(order.product_list.map(async productId => {
                        const productResponse = await axios.get(`http://127.0.0.1:8000/api/product/${productId}/`);
                        return productResponse.data;
                    }));
                    return { ...order, product_list: updatedProductList };
                }));

                setOrders(updatedOrders);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching orders:', error);
                setError('Error fetching orders. Please try again later.');
                setLoading(false);
            }
        };

        fetchOrders();
    }, [userId]);

    const printBill = async (orderId) => {
        const input = document.getElementById(`order-${orderId}`);
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'PNG', 0, 0);
                pdf.save(`order-${orderId}-bill.pdf`);
            });
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <Header />
            <div className="orders-page">
                <h1>My Orders</h1>
                <div className="orders-container">
                    {orders.map(order => (
                        <div key={order.id} className="order-card" id={`order-${order.id}`}>
                            <div className="order-header">
                                <h2>Order ID: {order.id}</h2>
                            </div>
                            <div className="products-details">
                                {order.product_list.map(product => (
                                    <div key={product.id} className="product-item">
                                        <img src={product.image} alt={product.name} className="product-image" />
                                        <div className="product-info">
                                            <p className="product-name">{product.name}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="order-footer">
                                <p>Total Price: <span className="total-price">${order.total_price}</span></p>
                                <button onClick={() => printBill(order.id)} className="btn btn-primary">
                                    <i className="fas fa-print"></i> Print Bill
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Update;
 